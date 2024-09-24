'use client';

import { DataTable } from '@/components/tables/data-table';
import { studentColumns } from '@/data/students/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon, Underline } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Banner from '@/components/ui/banner';

export default function ParentPage() {
  const [selectedTab, updateSelectedTab] = useState('parents');
  const data = {
    parents: {
      title: 'Parents List',
      content:
        'This is where you will add and manage all parents in your school.',
    },
    family: {
      title: 'Family Members',
      content:
        'Family are non-parents who can receive updates and handle checkouts with their own pin.',
    },
    pickups: {
      title: 'Approved Pickups',
      content:
        'Approved pickups are non-parents who can handle checkouts with their own pin.',
    },
  };
  return (
    <div>
      <Tabs defaultValue="parents" className="w-full">
        <TabsList variant={'underline'} width={'full'}>
          <TabsTrigger value="parents" variant={'underline'}>
            Parents
          </TabsTrigger>
          <TabsTrigger value="family" variant={'underline'}>
            Family Members
          </TabsTrigger>
          <TabsTrigger value="pickups" variant={'underline'}>
            Approved Pickups
          </TabsTrigger>
        </TabsList>
        <TabsContent value="parents">
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
              <h2 className="text-2xl font-bold tracking-tight">Parents List</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Button>
                  <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Parent
                </Button>
              </div>
            </div>
            <Banner/>
            <DataTable data={[]} columns={studentColumns} />
          </div>
        </TabsContent>
        <TabsContent value="family">
          <div className="m-8">
            <DataTable data={[]} columns={studentColumns} />
          </div>
        </TabsContent>
        <TabsContent value="pickups">
          <div className="m-8">
            <DataTable data={[]} columns={studentColumns} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
