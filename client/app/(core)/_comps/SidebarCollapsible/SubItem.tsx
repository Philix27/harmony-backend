import React from "react"
import Link from "next/link"
import { TextB } from "@/comps"
import { LucideIcon } from "lucide-react"

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
        <div className="hover:bg-primary mb-1 ml-[10px] flex items-center rounded-md p-1">
          <Icon className={"mr-2 size-3"} />
          <TextB v="p5" className={"font-light"}>{props.title}</TextB>
        </div>
      </Link>
    )
  } else {
    return (
      <div onClick={props.onClick}>
        <div className="hover:bg-primary mb-2 ml-[10px] flex items-center rounded-md p-1">
          <Icon className={"mr-2 size-3"} />
          <TextB v="p5" className={"font-light"}>{props.title}</TextB>
        </div>
      </div>
    )
  }
}
