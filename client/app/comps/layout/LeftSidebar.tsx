import React from "react"
import Link from "next/link"
import { BARS_WIDTH, cn } from "@/lib"
import { GraduationCap, MoonIcon, Settings, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"

export function LeftSidebar() {
  const { setTheme } = useTheme()

  return (
    <div
      className={cn(
        `bg-primary`,
        // `w-[${SIDE_BARS_WIDTH}]`,
        `w-[50px]`,
        `h-[calc(100vh - ${BARS_WIDTH} - ${BARS_WIDTH})]`,
        `flex flex-col justify-between`
      )}
    >
      <div className={cn(`flex flex-col items-center mt-[50px] space-y-4`)}>
        <Link href="/announcement" className={iconStyles}>
          <User size="14" className="w-5 h-5" />
        </Link>
        <Link href="/documents" className={iconStyles}>
          <User size="14" className="w-5 h-5" />
        </Link>
        <Link href="/schedular" className={iconStyles}>
          <User size="14" className="w-5 h-5" />
        </Link>
        <Link href="/documents" className={iconStyles}>
          <User size="14" className="w-5 h-5" />
        </Link>
      </div>
      <div className={cn(`flex flex-col items-center mb-[50px] space-y-4`)}>
        <Link href="/documents" className={iconStyles}>
          <Settings size="14" className="w-5 h-5" />
        </Link>
        <div className={cn(iconStyles, "dark:hidden")}>
          <MoonIcon
            size="14"
            onClick={() => setTheme("dark")}
            className="w-5 h-5"
          />
        </div>
        <div className={cn(iconStyles, "hidden dark:block")}>
          <Sun
            size="14"
            onClick={() => setTheme("light")}
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  )
}

export const iconStyles = `
size-[30px] rounded-[15px] bg-secondary 
opacity-50 hover:opacity-100 p-1 
flex items-center justify-center 
cursor-pointer`
