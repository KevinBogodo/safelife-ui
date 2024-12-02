import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from './ui/button';
import { CirclePlus } from 'lucide-react';

type Props = {
    title: string;
    className?: string;
    add?: boolean;
    action?: any;
}

export default function PageTitle({title, className, add, action}: Props) {
  return (
    <div className='flex justify-between gap-2'>
      <h1 className={cn("text-2xl font-semibold", className)}>
          { title }
      </h1>
      {add ?
        <Button 
          variant={'secondary'}
          onClick={() => action()}
        >
          <CirclePlus />
          Ajouter
        </Button>
        : null
      }
    </div>
  )
}