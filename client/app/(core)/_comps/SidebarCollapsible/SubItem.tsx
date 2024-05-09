import React from "react"
import Link from "next/link"
import { TextB } from "@/comps"
import { CircleDotIcon, LucideIcon } from "lucide-react"

export default function SectionSubItem({
  icon: Icon,
  ...props
}: {
  title: string
  link: string
  icon: LucideIcon
}) {
  return (
    <Link href={props.link}>
      <div className="flex items-center ml-[10px] py-1 px-1 hover:bg-primary rounded-md">
        <Icon className={"w-3 h-3 mr-2"} />
        <TextB v="p5">{props.title}</TextB>
      </div>
    </Link>
  )
}
