import { ContentLayout } from '@/components/admin-panel/content-layout';
import { DataTable } from '@/components/tables/data-table';
import { studentColumns } from '@/data/students/columns';
import { Button } from '@/components/ui/button';
import Banner from '@/components/ui/banner';
import { PlusCircleIcon } from 'lucide-react';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { studentSchema } from '@/data/students/schema';

async function getStudents() {
  const data = await fs.readFile(
    path.join(process.cwd(), '../../shared/src/data/students/students.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(studentSchema).parse(tasks);
}

export default async function StudentPage() {
  const students = await getStudents();
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student List</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Student
          </Button>
        </div>
      </div>
      <Banner />
      <DataTable data={students} columns={studentColumns} />
    </div>
  );
}
