'use client'
import { Button } from '@/components/ui/button';
import { StaffScheduleModal } from '@/components/schedules/staff-modal';
import { StudentScheduleModal } from '@/components/schedules/student-modal';
import { useState } from 'react';
import { Tabs,TabsList,TabsContent } from '@/components/ui/tabs';
import { TabsTrigger } from '@radix-ui/react-tabs';

export default function SchedulePage() {
  const date = new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentMonth = date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Time Schedular</h2>
          <p className="text-muted-foreground"></p>
          <p className="text-muted-foreground">
            This is where you can schedule staff and students time.
          </p>
        </div>
      </div>

      <div>
        <Button onClick={() => setIsModalOpen(true)}>
          Add Staff to Schedule
        </Button>
        <Button onClick={() => setIsModalOpen(true)}>
          Add Student to Schedule
        </Button>
        {isModalOpen && <StudentScheduleModal isModalOpen={isModalOpen} onClose={setIsModalOpen}/>}
        {isModalOpen && <StaffScheduleModal isModalOpen={isModalOpen} onClose={setIsModalOpen}/>}
      </div>
      
    </div>
  );
}
