import { BellIcon, Search } from "lucide-react"

import { TextB } from "../custom"
import { iconStyles } from "./LeftSidebar"

export function Navbar() {
  return (
    <div className="w-full bg-primary h-[40px]">
      <div className="flex items-center justify-between px-8 h-full">
        <TextB>Nav</TextB>
        <div className="flex space-x-2">
          <div className={iconStyles}>
            <Search className="w-5 h-5" />
          </div>
          <div className={iconStyles}>
            <BellIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
