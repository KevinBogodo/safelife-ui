"use client"; // Client Component

import React, { useState } from "react";
import { useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

import SideNavBar from "@/components/SideNavBar";
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button";
import { File, LayoutDashboard, Settings, Users2 } from "lucide-react";

 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [{ y }, api] = useSpring(() => ({ y: 100 }));
  const [open, setOpen] = useState(true);

  const bind = useDrag(({ down, movement: [, my], cancel }) => {
    if (my < -10) {
      // setOpen(true);
      api.start({ y: 0 });
      cancel?.();
    } else if (!down) {
      setOpen(false);
      api.start({ y: 100 });
    }
  });

  return (
      <div 
        {...bind()}
        className="flex w-full h-full"
      >
          {/* sidebar */}
          <SideNavBar isOpen={open}/>
          {/* main page */}
          <div className="p-8 w-full">
            {children}
          </div>

          {/* Footer */}
          {!isDesktop ?
            <div className="fixed bottom-0 left-0 w-full px-4 py-0 text-center">
              <Button variant="outline" className="left-0 w-full text-center border-t" onClick={() => {setOpen(!open)}}>
                <LayoutDashboard />
                <Users2 />
                <File />
                <Settings />
              </Button>
            </div>
            : null
          }
      </div>
  );
}
