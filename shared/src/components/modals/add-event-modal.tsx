// components/AddEventModal.tsx

'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';
import { CalendarEvent } from '../../hooks/use-event-store';

interface AddEventModalProps {
  selectedDateString: string;
  onAddEvent: (event: CalendarEvent) => void;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({
  selectedDateString,
  onAddEvent,
}) => {
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState<CalendarEvent>({
    id: '',
    title: '',
    description: '',
    startDate: new Date(),
    startTime: '09:00',
    endDate: new Date(),
    endTime: '10:00',
    color: 'blue',
    type: 'default',
    time: '09:00',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleColorChange = (value: string) => {
    setEventData({ ...eventData, color: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    alert('submited')
    e.preventDefault();
    onAddEvent({
      ...eventData,
      id: selectedDateString,
      time: eventData.startTime,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className='hover:bg-blue-500 hover:text-white'>+ New Event</Button>
      </DialogTrigger>
      <DialogContent className="fixed left-1/2 top-1/2 z-50 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-col space-y-1.5 text-center sm:text-left">
          <DialogTitle className="font-semibold tracking-tight text-lg sm:text-xl">
            Add New Event
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm sm:text-base">
            Create a new event in your calendar.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium leading-none">
              Event Name
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter event name"
              value={eventData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="color" className="text-sm font-medium leading-none">
              Select Room
            </label>
            <Select
              onValueChange={handleColorChange}
              defaultValue={eventData.color}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Room" />
              </SelectTrigger>
              <SelectContent>
                {['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'].map(
                  (room) => (
                    <SelectItem key={room} value={room}>
                      {room}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="space-y-2 flex-1">
              <label
                htmlFor="startDate"
                className="text-sm font-medium leading-none"
              >
                Start Date
              </label>
              <div>
                <Button variant="outline">
                  {eventData.startDate.toDateString()}
                </Button>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <label
                htmlFor="startTime"
                className="text-sm font-medium leading-none"
              >
                Start Time
              </label>
              <Input
                id="startTime"
                name="startTime"
                type="time"
                value={eventData.startTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="space-y-2 flex-1">
              <label
                htmlFor="endDate"
                className="text-sm font-medium leading-none"
              >
                End Date
              </label>
              <div>
                <Button variant="outline">
                  {eventData.endDate.toDateString()}
                </Button>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <label
                htmlFor="endTime"
                className="text-sm font-medium leading-none"
              >
                End Time
              </label>
              <Input
                id="endTime"
                name="endTime"
                type="time"
                value={eventData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium leading-none"
            >
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter event description"
              value={eventData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-between items-center w-full">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full sm:w-1/2 text-xs sm:text-sm"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-1/2 text-xs sm:text-sm"
            >
              Save Event
            </Button>
          </div>
        </form>
        <DialogClose asChild>
          <button
            type="button"
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x h-4 w-4"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
