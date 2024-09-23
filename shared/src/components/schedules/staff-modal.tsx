import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface StaffScheduleType {
  isModalOpen: boolean;
  onClose: (value: boolean) => void;
}

export function StaffScheduleModal({
  isModalOpen,
  onClose,
}: StaffScheduleType) {
  const [scheduleType, setScheduleType] = useState('work');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [repeatsEveryWeek, setRepeatsEveryWeek] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader >
          <DialogTitle  className="flex items-center">
            <span className="ml-2">Add staff to schedule</span>
          </DialogTitle>
        </DialogHeader>
        <form>
          <div className="flex flex-col py-4 space-y-4">
            <div>
              <Label>Schedule Type</Label>
              <RadioGroup
                defaultValue="work"
                onValueChange={setScheduleType}
                className="flex flex-wrap justify-start gap-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="work" id="work" />
                  <Label htmlFor="work">Work Shift</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pto" id="pto" />
                  <Label htmlFor="pto">PTO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sick" id="sick" />
                  <Label htmlFor="sick">Sick</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-2">
              <Label htmlFor="staff">Staff*</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="staff1">Staff 1</SelectItem>
                  <SelectItem value="staff2">Staff 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-2">
              <Label htmlFor="room">Room*</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="room1">Room 1</SelectItem>
                  <SelectItem value="room2">Room 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="repeats"
                checked={repeatsEveryWeek}
                onCheckedChange={(checked) =>
                  setRepeatsEveryWeek(checked as boolean)
                }
              />
              <label
                htmlFor="repeats"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Repeats every week
              </label>
            </div>
            <div className="grid gap-2">
              <Label>Date Range</Label>
              <div className="flex space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !startDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? (
                        format(startDate, 'PPP')
                      ) : (
                        <span>Start date*</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      autoFocus
                      startMonth={new Date(1999, 11)}
                      endMonth={new Date(2030, 2)}
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !endDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, 'PPP') : <span>End date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      autoFocus
                      startMonth={new Date(1999, 11)}
                      endMonth={new Date(2030, 2)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Time Range</Label>
              <div className="flex space-x-2">
                <Input type="time" className="w-full" />
                <span className="self-center">to</span>
                <Input type="time" className="w-full" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Days of the week</Label>
              <div className="flex flex-wrap gap-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <Button
                    key={day}
                    variant={selectedDays.includes(day) ? 'default' : 'outline'}
                    className="w-10"
                    onClick={() => handleDayToggle(day)}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea placeholder="Add description" id="description" />
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
