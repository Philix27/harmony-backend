import React from "react"
import Link from "next/link"
import { TextB } from "@/comps"
import { CircleDotIcon, LucideIcon } from "lucide-react"

export default function SectionSubItem({
  icon: Icon,
  ...props
}: {
  title: string
  link?: string
  onClick?: VoidFunction
  icon: LucideIcon
}) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <div className="hover:bg-primary ml-[10px] flex items-center rounded-md p-1">
          <Icon className={"mr-2 size-3"} />
          <TextB v="p5">{props.title}</TextB>
        </div>
      </Link>
    )
  } else {
    return (
      <div onClick={props.onClick}>
        <div className="hover:bg-primary ml-[10px] flex items-center rounded-md p-1">
          <Icon className={"mr-2 size-3"} />
          <TextB v="p5">{props.title}</TextB>
        </div>
      </div>
    )
  }
}
