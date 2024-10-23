'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button'; // Import necessary UI components from ShadCN
import { Card, CardContent, CardTitle } from '../ui/card';
import {
  ArrowLeftIcon,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from 'lucide-react'; // Assuming you're using lucide icons for chevrons
import {
  useEventStore,
  CalendarEvent,
  EventStore,
} from '../../hooks/use-event-store';
import { AddEventModal } from './add-event-modal';
import { Combobox, COption } from '../common/room-selector';
import ViewSelector from './view-selector';
import CurrentDaySelector from './current-day';
import { useStore } from '../../hooks/use-store';
import EventCard from './event';
import CreateMenuSheet from '../sheets/create-menu-sheet';

type CalendarButtonType = 'timeEvent' | 'MenuEvent';

interface EventCalendarProps {
  buttonType: CalendarButtonType;
}

export default function EventCalendar({ buttonType }: EventCalendarProps) {
  const eventStore = useStore(useEventStore, (state) => state);
  const [weekOffset, setWeekOffset] = useState(0); // Offset in terms of weeks

  // Function to calculate the current week's start and end dates based on offset
  const calculateWeekRange = (offset = 0) => {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // Get the current day of the week (0 = Sunday, 6 = Saturday)

    // Calculate the start (Sunday) and end (Saturday) of the current week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDayOfWeek + offset * 7); // Move to Sunday of the week

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

    return { startOfWeek, endOfWeek };
  };

  // Helper function to format the date range as 'September 15-21'
  const formatWeekRange = ({
    startOfWeek,
    endOfWeek,
  }: {
    startOfWeek: Date;
    endOfWeek: Date;
  }) => {
    const startMonth = startOfWeek.toLocaleString('default', {
      month: 'short',
    });
    const endMonth = endOfWeek.toLocaleString('default', { month: 'short' });

    const startDay = String(startOfWeek.getDate()).padStart(2, '0');
    const endDay = String(endOfWeek.getDate()).padStart(2, '0');

    // If the start and end are in the same month
    const formattedString = `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    return formattedString;
  };

  // Get the current week's date range
  const { startOfWeek, endOfWeek } = calculateWeekRange(weekOffset);
  const weekRangeString = formatWeekRange({ startOfWeek, endOfWeek });

  // Function to move to the next/previous week
  const shiftWeek = (direction: number) => {
    setWeekOffset(weekOffset + direction); // Shift by one week
  };

  const onAddEvent = (event: CalendarEvent) => {
    if (event) {
      if (!event.id) {
        event.id = event.startDate.toLocaleDateString('en-CA');
      }
      eventStore?.addEvent(event.id, event);
    }
  };

  // Generate the dates for the current week (Sunday to Saturday)
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    dates.push(date);
  }

  const rooms: COption[] = [
    {
      value: 'room1',
      label: 'Room 1',
    },
    {
      value: 'room2',
      label: 'Room 2',
    },
    {
      value: 'room3',
      label: 'Room 3',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-1 items-center space-x-2">
          <Combobox options={rooms} />
          <ViewSelector />
          <CurrentDaySelector />

          <div className="inline-flex items-center">
            <Button
              variant="expandIcon"
              leftIcon={ChevronLeft}
              onClickLeftIcon={() => shiftWeek(-1)}
              rightIcon={ChevronRight}
              onClickRightIcon={() => shiftWeek(1)}
            >
              <div className="text-sm font-semibold">{weekRangeString}</div>
            </Button>
          </div>
        </div>
        {buttonType === 'timeEvent' ? (
          <AddEventModal onAddEvent={onAddEvent} selectedDateString="" />
        ) : (
          <CreateMenuSheet />
        )}
      </div>

      {/* Week navigation */}

      {/* Days of Week Header */}
      <div className="w-full pt-4">
        <div className="grid grid-cols-7 gap-0 items-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
            (day, index) => {
              const displayDate = dates[index].getDate();
              const isToday =
                dates[index].toDateString() === new Date().toDateString();
              return (
                <div key={day} className="flex flex-col items-center my-2">
                  <div className="text-sm text-gray-500">{day}</div>
                  <div
                    className={`text-xl font-bold flex items-center justify-center w-10 h-10
                    ${isToday ? 'bg-black text-white rounded-full' : ''}`}
                  >
                    {displayDate}
                  </div>
                </div>
              );
            }
          )}
          {dates.map((date, index) => {
            const dateString = date.toLocaleDateString('en-CA'); // Example: 2024-09-15
            const isToday =
              dates[index].toDateString() === new Date().toDateString();
            const isFirstOrLast = index === 0 || index === dates.length - 1;
            console.log(eventStore?.events);
            return (
              <div
                key={`card-${dateString}`}
                className={`flex justify-center h-auto min-h-[12rem] border-t-2 border-b-2 ${
                  isToday ? 'bg-blue-50' : ''
                } ${
                  isFirstOrLast
                    ? index === 0
                      ? 'border-l-2 rounded-tl-sm rounded-bl-sm'
                      : index === dates.length - 1
                      ? 'border-r-2 border-l-2 rounded-tr-sm rounded-br-sm'
                      : ''
                    : 'border-l-2'
                } `}
              >
                <div className="h-full flex flex-col">
                  {eventStore?.events[dateString]?.map((event) => (
                    <EventCard event={event} />
                  ))}
                  <div className="m-2">
                    {buttonType === 'timeEvent' ? (
                      <AddEventModal
                        onAddEvent={onAddEvent}
                        selectedDateString={dateString}
                      />
                    ) : (
                      <CreateMenuSheet />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
