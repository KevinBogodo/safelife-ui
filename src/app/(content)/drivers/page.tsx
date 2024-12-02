"use client"

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DataTable } from '@/components/DataTable'
import { ColumnDef } from "@tanstack/react-table"
import axiosInstance from "@/lib/axiosInstance";
import PageTitle from '@/components/PageTitle'
import { Eye, Loader2, QrCode, UserPen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModalRegister from '@/components/ModalRegister';

// type Props = {}

export default function DriversPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState(null);
  const [dataTable, setDataTable] = useState<DriverForm[]>([])
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Data function
  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.get("/users");
      buildDataTable(response.data);      
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const Toggle = useCallback(() => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  },[modal])

  const ClickAddUser = useCallback(() => {
    setIsEdit(false);
    Toggle();
  },[Toggle])

  const ClickEditUser = useCallback(() => {
    setIsEdit(true);
    Toggle();
  },[Toggle])

  const buildDataTable = (dataSource:any) => {
    if (dataSource.data.length > 0) {
      const dataout = dataSource.data
        .filter((e: any) => e.role_id >= 3)
        .map((data: any) =>({
          id: data.id,
          name: data.name,
          surname: data.surname,
          phone1: data.phone1,
          phone2: data.phone2,
          role_id: data.role_id,
          card_id: data.card_id,
          email: data.email,
          town: data.town,
          street: data.street,
          status: data.status
        }))
      return setDataTable(dataout)
    }
    return setDataTable([])
  }

  const columns: ColumnDef<DriverForm>[] = useMemo(() =>
      [
        {
          accessorKey: "name",
          header: "Name",
          cell: ({ row }) => {
            return <div className='flex gap-2 items-center'> 
                <p>{row.getValue("name")}</p>
              </div>
          }
        },
        {
          accessorKey: "surname",
          header: "Surname",
          cell: ({ row }) => {
            return <div className='flex gap-2 items-center'> 
                <p>{row.getValue("surname")}</p>
              </div>
          }
        },
        {
          accessorKey: "phone1",
          header: "Phone",
        },
        {
          accessorKey: "town",
          header: "City",
        },
        {
          accessorKey: "street",
          header: "Street",
        },
        {
          accessorKey: "email",
          header: "Email",
        },
        {
          accessorKey: "id",
          header: "Action",
          classname: "justify-end",
          cell: ({ row }) => {
            return <div className='flex justify-end gap-1 items-center'> 
                <Button>
                  <QrCode />
                </Button>
                <Button>
                  <UserPen />
                </Button>
                <Button>
                  <Eye />
                </Button>
              </div>
          }
        },
      ]
  ,[])

  return (
    <div className="flex flex-col gap-5 w-full">
        {loading ?
          <div className='flex w-100 h-100 justify-center items-end h-[50vh]'>
            <Loader2 className="w-16 h-16 animate-spin" />
          </div>
          :
          <>
            <PageTitle title='Drivers' add={true} action={ClickAddUser}/>
            <DataTable columns={columns} data={dataTable}/>
            <ModalRegister status={modal} isEdit={isEdit} changeStatus={setModal}/>

          </>
        }
    </div>
  )
}

type DriverForm = {
  id: number
  name: string
  surname: string
  phone1: string
  phone2?: string
  profile?: string
  role_id: number
  card_id: string
  email: string
  town: string
  street: string
  status?: number
}

export type UserType = {
  id: number
  name: string
  surname?: string
  username: string
  phone1: string
  phone2?: string
  profile?: string
  role_id: number
  role?: RoleType
  sexe: string
  status?: number
  street: string
  town: string
  country: string
  birthdate?: string
  card_picture?: string
  card_id: string
  email?: string
  folders?: FolderType
  created_at?: string
  updated_at?: string
}

export type RoleType = {
  id: number
  name: string
}

export type FolderType = {
  id: number
  brand: string
  model: string
  owner_id: number
  registration_number: string
  registration_picture: string
  status?: number
  street?: string
  town?: string
  country?: string
  type: number
  created_at?: string
  updated_at?: string

}