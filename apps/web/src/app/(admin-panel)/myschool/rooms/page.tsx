import { DataTable } from '@/components/tables/data-table';
import { columns } from '@/components/tables/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon, Terminal } from 'lucide-react';
import {AddEventModal} from "@/components/calendar/add-event-modal"

export default function RoomPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Rooms</h2>
          <p className="text-muted-foreground">
            Rooms are your virtual classrooms for your school and can be a
            classroom or play area you use for your students
          </p>
          <p className="text-muted-foreground">
            How they are set up is up to you!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
   
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
