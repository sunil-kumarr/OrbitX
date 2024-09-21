'use client'

import { DataTable } from '@/components/tables/data-table';
import { columns } from '@/components/tables/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export default function ParentPage() {

  const [selectedTab,updateSelectedTab] = useState('parents')
  const data = {
    parents: {
      title: 'Parents List',
      content: 'This is where you will add and manage all parents in your school.'
    },
    family: {
      title: 'Family Members',
      content: 'Family are non-parents who can receive updates and handle checkouts with their own pin.'
    },
    pickups: {
      title: 'Approved Pickups',
      content: 'Approved pickups are non-parents who can handle checkouts with their own pin.'
    }
  }
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{data[selectedTab].title}</h2>
          <p className="text-muted-foreground">
          {data[selectedTab].content}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
      <Tabs defaultValue="parents" className="w-[400px]" >
        <TabsList>
          <TabsTrigger value="parents">Parents</TabsTrigger>
          <TabsTrigger value="family">Family Members</TabsTrigger>
          <TabsTrigger value="pickups">Approved Pickups</TabsTrigger>
        </TabsList>
      </Tabs>
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
