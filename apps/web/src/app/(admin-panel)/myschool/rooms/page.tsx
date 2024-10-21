import { DataTable } from '@/components/tables/data-table';
import { roomColumns } from '@/data/rooms/columns';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import RoomAdditionSheet from '@/components/admin-panel/room-addition-sheet';
import { roomSchema } from '@/data/rooms/schema';

async function getRooms() {
  const data = await fs.readFile(
    path.join(process.cwd(), '../../shared/src/data/rooms/rooms.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(roomSchema).parse(tasks);
}

export default async function RoomPage() {
  const rooms = await getRooms();
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
          <RoomAdditionSheet />
        </div>
      </div>

      <DataTable data={rooms} columns={roomColumns} />
    </div>
  );
}
