import { ContentLayout } from '@/components/admin-panel/content-layout';
import { DataTable } from '@/components/tables/data-table';
import { columns } from '@/components/tables/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';

export default function StudentPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student List</h2>
          <p className="text-muted-foreground">
            This is where you will add and manage all students in your school.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Student
          </Button>
        </div>
      </div>
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
