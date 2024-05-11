"use client"

import { useState } from "react"
import { LeftSidebar, Navbar, RightSidebar } from "@/comps"
import { AppStores, BARS_WIDTH } from "@/lib"

import { SidebarCollapsible } from "./_comps/SidebarCollapsible"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const [openNav, setOpenNav] = useState(false)
  const isSidebarOpen = AppStores.useSettingsStore(
    (state) => state.isSidebarOpen
  )

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-screen w-full flex flex-col justify-between">
        {/* TOp */}
        {/* <div className={`bg-amber-600 w-full h-[${BARS_WIDTH}]`}></div> */}
        {/* Body */}
        <div className={`w-full flex h-full justify-between`}>
          <LeftSidebar />
          <div className="w-full flex">
            <SidebarCollapsible />
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </div>
          {/* <RightSidebar /> */}
        </div>
        {/* Bottom */}
        {/* <div className={`bg-amber-600 w-full h-[${BARS_WIDTH}]`}></div> */}
      </div>
    </div>
  )
}
