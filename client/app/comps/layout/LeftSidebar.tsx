import React from "react"
import Link from "next/link"
import { BARS_WIDTH, cn } from "@/lib"
import { GraduationCap, MoonIcon, Settings, Sun } from "lucide-react"
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
          <GraduationCap className="w-5 h-5" />
        </Link>
        <Link href="/documents" className={iconStyles}>
          <GraduationCap className="w-5 h-5" />
        </Link>
        <Link href="/schedular" className={iconStyles}>
          <GraduationCap className="w-5 h-5" />
        </Link>
        <Link href="/documents" className={iconStyles}>
          <GraduationCap className="w-5 h-5" />
        </Link>
      </div>
      <div className={cn(`flex flex-col items-center mb-[50px] space-y-4`)}>
        <Link href="/documents" className={iconStyles}>
          <Settings className="w-5 h-5" />
        </Link>
        <div className={cn(iconStyles, "dark:hidden")}>
          <MoonIcon onClick={() => setTheme("dark")} className="w-5 h-5" />
        </div>
        <div className={cn(iconStyles, "hidden dark:block")}>
          <Sun onClick={() => setTheme("light")} className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export const iconStyles = `
rounded-lg bg-secondary 
opacity-50 hover:opacity-100 p-1 
flex items-center justify-center 
cursor-pointer`
