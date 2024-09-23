import { create } from 'zustand'

export interface CalendarEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  color: string;
  type: string;
}

export interface EventStore {
  events: { [key: string]: CalendarEvent[] };
  addEvent: (id: string, event: CalendarEvent) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: {},
  addEvent: (id, event) => set((state) => ({
    events: {
      ...state.events,
      [id]: [...(state.events[id] || []), event],
    },
  })),
}))