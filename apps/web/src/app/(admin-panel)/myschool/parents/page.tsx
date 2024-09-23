'use client';

import { DataTable } from '@/components/tables/data-table';
import { columns } from '@/components/tables/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon, Underline } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

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
          <div className="m-8">
            <DataTable data={[]} columns={columns} />
          </div>
        </TabsContent>
        <TabsContent value="family">Change your password here.</TabsContent>
        <TabsContent value="pickups">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
