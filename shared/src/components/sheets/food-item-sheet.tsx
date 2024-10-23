'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
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

export default function AddFoodItemSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Add Food Item</Button>
      </SheetTrigger>
      <SheetContent className=" w-[700px] flex flex-col">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>Food Item</SheetTitle>
          <SheetDescription>
            Here you can add new food items for your menu.
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
                          <Input placeholder="Milk" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Category*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Dairy" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dairy">Dairy</SelectItem>
                            <SelectItem value="fruits">Fruits</SelectItem>
                            <SelectItem value="vegetables">Vegetables</SelectItem>
                            <SelectItem value="grains">Grains</SelectItem>
                            <SelectItem value="meat_products">Meat products</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <SheetFooter className="flex-shrink-0">
              <Button type="submit" className="w-full">
                Save
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
