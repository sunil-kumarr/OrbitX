import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CalendarEvent } from '../../hooks/use-event-store';
import { Button } from '../ui/button';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

interface EventCardProps {
  event: CalendarEvent;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  return (
    <Card className="m-1 rounded-sm">
      <CardHeader className="flex flex-col items-start justify-between space-y-0 bg-gray-100 p-1">
        <div className="flex items-center justify-between w-full">
          <span className="bg-blue-100 text-blue-400 rounded-full text-xs px-[4px] py-[1px]">
            {event.startTime}
          </span>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => alert('clicked')}
            className="ml-2"
          >
            <DotsVerticalIcon />
          </Button>
        </div>

        <CardTitle className="text-sm font-medium overflow-y-hidden px-1">
          {event.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <p className="mt-2 text-sm text-muted-foreground">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}
