
import EventCalendar from "@/components/calendar/event-calendar";

export default function CalendarPage() {
  const date = new Date();
  const currentMonth = date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
      <div className="flex items-center justify-between space-y-2 px-8 pt-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{currentMonth}</h2>
          <p className="text-muted-foreground"></p>
          <p className="text-muted-foreground">
            This is where you will see all the events.
          </p>
        </div>
      </div>

      <EventCalendar buttonType="timeEvent"/>
    </div>
  );
}
