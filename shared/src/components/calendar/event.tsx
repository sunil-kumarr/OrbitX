import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CalendarEvent } from '../../hooks/use-event-store';

interface EventCardProps {
  event: CalendarEvent;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  return (
    <Card className="m-2 rounded-sm">
      <CardHeader className="flex flex-col items-start justify-between space-y-0 bg-gray-100 p-2">
        <CardTitle className="text-sm font-medium overflow-y-hidden">{event.title}</CardTitle>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{event.startTime}</span>
          <span className="text-xs text-muted-foreground">{event.endTime}</span>
        </div>
      </CardHeader>
      <CardContent className='p-2'>
        <p className="mt-2 text-sm text-muted-foreground">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}
