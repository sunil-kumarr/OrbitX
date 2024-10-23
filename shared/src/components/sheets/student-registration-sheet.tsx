"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react"
import { format } from "date-fns"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "../ui/sheet"
import { Switch } from "../ui/switch"
import { useForm } from "react-hook-form"
import { Separator } from "../ui/separator"

export default function StudentRegistrationSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const [isParentInfoOpen, setIsParentInfoOpen] = useState(false)
  const form = useForm()

  const onSubmit = (data:any) => {
    console.log(data)
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </SheetTrigger>
      <SheetContent className=" w-[700px] flex flex-col">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>Add Student</SheetTitle>
          <SheetDescription>Here you can add new students to your school.</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto py-4 px-1">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-md font-semibold">STATUS</h2>
                  <div className="flex space-x-2">
                    <Button type="button" variant={form.watch("status") === "prospect" ? "default" : "outline"} onClick={() => form.setValue("status", "prospect")}>
                      Prospect
                    </Button>
                    <Button type="button" variant={form.watch("status") === "waitlist" ? "default" : "outline"} onClick={() => form.setValue("status", "waitlist")}>
                      Waitlist
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h2 className="text-md font-semibold">STUDENT INFO:</h2>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name*</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select a Program</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="program1">Program 1</SelectItem>
                            <SelectItem value="program2">Program 2</SelectItem>
                            <SelectItem value="program3">Program 3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                type="button"
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                            
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator className="my-4"/>
                <Collapsible
                  open={isParentInfoOpen}
                  onOpenChange={setIsParentInfoOpen}
                  className="space-y-2"
                >
                  <CollapsibleTrigger asChild>
                    <Button type="button" variant="ghost" className="flex w-full justify-between p-0">
                      <h3 className="text-lg font-semibold">Parent info</h3>
                      {isParentInfoOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <FormField
                      control={form.control}
                      name="parentFirstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Parent's first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentLastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Parent's last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Parent's email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" variant="link" className="p-0">Switch to Phone</Button>
                    <FormField
                      control={form.control}
                      name="inviteParent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Invite parent to brightwheel</FormLabel>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            <SheetFooter className="flex-shrink-0">
              <Button type="submit" className="w-full">Add Student</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}