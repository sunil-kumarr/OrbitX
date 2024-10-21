'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Student } from './schema';
import { DataTableColumnHeader } from '../../components/tables/data-table-column-header';

import { Button } from '../../components/ui/button';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CalendarX} from 'lucide-react';
import { statuses } from './options';

export const studentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.getValue('name')}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('room')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'absentReason',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attendance" />
    ),
    cell: ({ row }) => <span>{row.getValue('absentReason')}</span>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'isAbsent',
    header: ({ column }) => <div></div>,
    cell: ({ row }) => (
      
      row.getValue('isCheckedIn') === false
          ? row.getValue('isAbsent') === false
            ? <Button variant="destructive">
              <CalendarX size={16}/>
              <p className='ml-2'>Mark Absent</p></Button>
            : row.getValue('isAbsent')
          : ''
   
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'isCheckedIn',
    header: ({ column }) => <div></div>,
    cell: ({ row }) => (
      <Button variant="outline" size="sm">
        <div className='flex flex-row justify-center'>
        {row.getValue('isCheckedIn') === true ? (
          <ArrowRightCircleIcon size={16} color='red'/>
        ) : (
          <ArrowLeftCircleIcon size={16} color='green'/>
        )}
        <span className='w-[70px]'>
        {row.getValue('isCheckedIn') === true ? 'Check Out' : 'Check In'}
        </span>
       
      
        </div>
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
