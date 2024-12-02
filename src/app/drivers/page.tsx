"use client"

import React from 'react'
import { DataTable } from '@/components/DataTable'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'

// type Props = {}

export default function DriversPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
        <PageTitle title='Drivers' />
        <DataTable columns={columns} data={data}/>
    </div>
  )
}

type Payment = {
  id: number
  name: string
  phone: string
  card_id: string
  email: string
  town: string
  status?: number
}
 
export const data: Payment[] = [
  {
    id: 1,
    name: "user 1",
    phone: "6974851263",
    card_id: "PRD784S5E3569",
    email: "user@mail.com",
    town: "Douala",
    status: 1
  },
  
]
 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div className='flex gap-2 items-center'> 
                <img 
                  className="h-10 w-10" 
                  src={`https://api.dicebear.com/9.x/micah/svg?seed=${row.getValue("name")}`} 
                  alt="" 
                />
                <p>{row.getValue("name")}</p>
        </div>
    }
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "card_id",
    header: "Card Id",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "town",
    header: "city",
  },
  {
    accessorKey: "status",
    header: "status",
  },
]