import { ComboboxDemo } from '../common/room-selector';
import { Input } from '../ui/input';
import { AddEventModal } from './add-event-modal';
import CurrentDaySelector from './current-day';
import ViewSelector from './view-selector';

export default function CalendarToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search Events"
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <ComboboxDemo />
        <ViewSelector/>
        <CurrentDaySelector />
      </div>
      <AddEventModal />
    </div>
  );
}
