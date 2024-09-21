"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button'; // Import necessary UI components from ShadCN
import { Card } from '../ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you're using lucide icons for chevrons

export default function EventCalendar() {
  const [weekOffset, setWeekOffset] = useState(0); // Offset in terms of weeks
  const [events, setEvents] = useState<{ [key: string]: string[] }>({});

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
  const formatWeekRange = ({ startOfWeek, endOfWeek }: { startOfWeek: Date; endOfWeek: Date }) => {
    const startMonth = startOfWeek.toLocaleString('default', { month: 'long' });
    const endMonth = endOfWeek.toLocaleString('default', { month: 'long' });

    const startDay = startOfWeek.getDate();
    const endDay = endOfWeek.getDate();

    // If the start and end are in the same month
    if (startMonth === endMonth) {
      return `${startMonth} ${startDay}-${endDay}`;
    } else {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    }
  };

  // Get the current week's date range
  const { startOfWeek, endOfWeek } = calculateWeekRange(weekOffset);
  const weekRangeString = formatWeekRange({ startOfWeek, endOfWeek });

  // Function to move to the next/previous week
  const shiftWeek = (direction: number) => {
    setWeekOffset(weekOffset + direction); // Shift by one week
  };

  // Function to handle event addition
  const addEvent = (date: string) => {
    const newEvent = prompt(`Add event for date ${date}`);
    if (newEvent) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [date]: [...(prevEvents[date] || []), newEvent],
      }));
    }
  };

  // Generate the dates for the current week (Sunday to Saturday)
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    dates.push(date);
  }

  return (
    <div className="p-6">
      {/* Week navigation */}
      <div className="flex justify-between items-center mb-4">
        <Button onClick={() => shiftWeek(-1)}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="text-lg font-semibold">{weekRangeString}</div>
        <Button onClick={() => shiftWeek(1)}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-4">
        {dates.map((date, index) => {
          const dateString = date.toLocaleDateString('en-CA'); // Example: 2024-09-15
          const displayDate = date.getDate();

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-md h-auto flex flex-col items-center justify-center p-2"
            >
              <div className="text-lg font-semibold mb-2">{displayDate}</div>

              {/* Add Event Button */}
              <Button variant="outline" size="sm" onClick={() => addEvent(dateString)}>
                + Add Event
              </Button>

              {/* Display Events for this Date */}
              <div className="mt-2 w-full">
                {events[dateString] &&
                  events[dateString].map((event, i) => (
                    <Card key={i} className="p-2 mt-1">
                      {event}
                    </Card>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
