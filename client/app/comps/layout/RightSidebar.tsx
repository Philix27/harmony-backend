import React from "react"
import { BARS_WIDTH, cn } from "@/lib"
import { BellIcon, Clock10, Search } from "lucide-react"

import { iconStyles } from "./LeftSidebar"

export function RightSidebar() {
  return (
    <div
      className={cn(
        `bg-primary`,
        // `w-[${SIDE_BARS_WIDTH}]`,
        `w-[50px]`,
        `h-[calc(100vh - ${BARS_WIDTH} - ${BARS_WIDTH})]`,
        `flex flex-col items-center pt-[50px] space-y-4`
      )}
    >
      <div className={iconStyles}>
        <Search className="w-5 h-5" />
      </div>
      <div className={iconStyles}>
        <BellIcon className="w-5 h-5" />
      </div>
    </div>
  )
}
