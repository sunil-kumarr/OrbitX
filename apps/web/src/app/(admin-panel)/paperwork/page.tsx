'use client';


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


export default function PaperworkPage() {

 
  return (
    <div>
      <Tabs defaultValue="forms_and_requests" className="w-full">
        <TabsList variant={'underline'} width={'full'}>
          <TabsTrigger value="forms_and_requests" variant={'underline'}>
            Forms & Request
          </TabsTrigger>
          <TabsTrigger value="shared_files" variant={'underline'}>
            Shared Files
          </TabsTrigger>
        </TabsList>
        <TabsContent value="forms_and_requests">
          
        </TabsContent>
        <TabsContent value="shared_files">
        </TabsContent>
      </Tabs>
    </div>
  );
}
