'use client';

import { DataTable } from '@/components/tables/data-table';
import { studentColumns } from '@/data/students/columns';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon, Underline } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Banner from '@/components/ui/banner';
import AdmissionDashboardTab from './dashboard';

export default function AdmissionPage() {
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
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList variant={'underline'} width={'full'}>
          <TabsTrigger value="dashboard" variant={'underline'}>
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="process" variant={'underline'}>
            Process
          </TabsTrigger>
          <TabsTrigger value="waitlists" variant={'underline'}>
            Waitlists
          </TabsTrigger>
          <TabsTrigger value="programs" variant={'underline'}>
            Programs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <AdmissionDashboardTab/>
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
