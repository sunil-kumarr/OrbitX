'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '../../components/ui/badge';
import { Checkbox } from '../../components/ui/checkbox';

import { priorities, statuses } from './data';
import { Student } from './schema';
import { DataTableColumnHeader } from '../../components/tables/data-table-column-header';
import { DataTableRowActions } from '../../components/tables/data-table-row-actions';
import { Button } from '../../components/ui/button';
import { ArrowRightCircleIcon, Cross } from 'lucide-react';

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
    enableHiding: false
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
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
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
    cell: ({ row }) => (
      <span>{row.getValue('absentReason')}</span>
      
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'isAbsent',
    header: ({ column }) => <div></div>,
    cell: ({ row }) => (
      <Button variant="ghost">
        <Cross />
        {row.getValue('isCheckedIn') === false
          ? row.getValue('isAbsent') === false
            ? 'Mark Absent'
            : row.getValue('isAbsent')
          : ''}
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'isCheckedIn',
    header: ({ column }) => <div></div>,
    cell: ({ row }) => (
      <Button variant="outline">
        <ArrowRightCircleIcon />
        {row.getValue('isCheckedIn') === true ? 'Check Out' : 'Check In'}
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
