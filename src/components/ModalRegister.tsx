import React, { useEffect } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'

type DialogParam = {
    status: boolean;
    isEdit: boolean;
    changeStatus: any;
}

export default function ModalRegister({status, isEdit, changeStatus}: DialogParam) {

    useEffect(() => {
        console.log(status);
        
    },[status])
    return (
        <Dialog open={status} onOpenChange={changeStatus}>
          <DialogContent className="max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }