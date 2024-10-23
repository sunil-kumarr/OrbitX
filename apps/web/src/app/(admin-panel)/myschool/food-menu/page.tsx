'use client';

import { DataTable } from '@/components/tables/data-table';
import Banner from '@/components/ui/banner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateMenuSheet from '@/components/sheets/create-menu-sheet';
import AddFoodItemSheet from '@/components/sheets/food-item-sheet';
import { foodItemsColumns } from '@/data/food-menu/columns';
import EventCalendar from '@/components/calendar/event-calendar';

export default function FoodMenuPage() {
  return (
    <div>
      <Tabs defaultValue="menu_calendar" className="w-full">
        <TabsList variant={'underline'} width={'full'}>
          <TabsTrigger value="menu_calendar" variant={'underline'}>
            Menu Calendar
          </TabsTrigger>
          <TabsTrigger value="food_items" variant={'underline'}>
            Food Items
          </TabsTrigger>
        </TabsList>
        <TabsContent value="menu_calendar">
          <div className="hidden h-full flex-1 flex-col space-y-8 p-2 md:flex">
            <EventCalendar buttonType='MenuEvent'/>
          </div>
        </TabsContent>
        <TabsContent value="food_items">
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Food Items
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <AddFoodItemSheet />
              </div>
            </div>
            <Banner
              title="Welcome to list of food items "
              description="Here you can manage food items which can be used to create food menus"
            />
            <DataTable data={[]} columns={foodItemsColumns} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
