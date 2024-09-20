import { ContentLayout } from '@/components/admin-panel/content-layout';
import { DataTable } from '@/components/tables/data-table';
import { columns } from '@/components/tables/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ParentPage() {
  return (
   
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Parents List
                </h2>
                <p className="text-muted-foreground">
                  This is where you will add and manage all students in your
                  school.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button>
                  <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Student
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <DataTable data={[]} columns={columns} />
      </div>
   
  );
}
