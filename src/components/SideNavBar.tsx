
"use client"

import React, {useState} from 'react'
import { useMediaQuery } from "@/hooks/use-media-query"
import { Nav } from './ui/nav'
type Props = {
  isOpen: boolean,
}

import {
  ChevronLeft,
  ChevronRight,
    File,
    LayoutDashboard,
    Settings,
    Users2,
} from "lucide-react"
import { Button } from './ui/button'
import { Drawer, DrawerContent } from './ui/drawer'

export default function SideNavBar ({isOpen}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = React.useState(isOpen);


  function sidebarToggle() {
    setIsCollapsed(!isCollapsed)
  }

  if (isDesktop) {
    return (
      <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        <div className='absolute right-[-20px] top-7'>
          <Button 
            onClick={sidebarToggle} 
            variant='secondary' 
            className="rounded-full p-2"
          >
            {isCollapsed ?
              <ChevronRight />
              :<ChevronLeft />
            }
          </Button>
        </div>
  
          <Nav 
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  href: "/",
                  variant: "default",
                },
                {
                  title: "Drivers",
                  icon: Users2,
                  href: "/drivers",
                  variant: "ghost",
                },
                {
                  title: "Folders",
                  icon: File,
                  href: "/folders",
                  variant: "ghost",
                },
                {
                  title: "Settings",
                  icon: Settings,
                  href: "/settings",
                  variant: "ghost",
                },
              ]}
          />
      </div>
    )
  }

  return (
    <div>

      {/* <Drawer open={isOpen}> */}
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerContent>
          <Nav 
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  href: "/",
                  variant: "default",
                },
                {
                  title: "Drivers",
                  icon: Users2,
                  href: "/drivers",
                  variant: "ghost",
                },
                {
                  title: "Folders",
                  icon: File,
                  href: "/folders",
                  variant: "ghost",
                },
                {
                  title: "Settings",
                  icon: Settings,
                  href: "/settings",
                  variant: "ghost",
                },
              ]}
          />

          {/* <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">
                <ChevronDown />
              </Button>
            </DrawerClose>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  )
}