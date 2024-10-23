'use client';

import { useState } from 'react';
import { CalendarIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from '../ui/sheet';
import { useForm } from 'react-hook-form';
import { Separator } from '../ui/separator';

export default function RoomAdditionSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Add Room</Button>
      </SheetTrigger>
      <SheetContent className=" w-[700px] flex flex-col">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>Add Room</SheetTitle>
          <SheetDescription>
            Here you can add new rooms to your school.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div className="flex-grow overflow-y-auto py-4 px-1">
              <div className="space-y-4">
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Classroom 1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="roomtype"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select a Room Type*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Playground" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="classroom">Classroom</SelectItem>
                            <SelectItem value="playground">
                              Playground
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Room Capacity*</FormLabel>
                        <FormControl>
                          <Input placeholder="50 Students" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <SheetFooter className="flex-shrink-0">
              <Button type="submit" className="w-full">
                Add Room
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
