'use client';

import { ColumnDef } from '@tanstack/react-table';

import { FoodItem, FoodMenu } from './schema';
import { DataTableColumnHeader } from '../../components/tables/data-table-column-header';

export const foodItemsColumns: ColumnDef<FoodItem>[] = [
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
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('category')}</div>,
    enableSorting: false,
    enableHiding: false,
  }
];

export const foodMenuColumns: ColumnDef<FoodMenu>[] = [
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
];
