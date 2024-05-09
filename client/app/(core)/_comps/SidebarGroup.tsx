import { useState } from "react"
import Link from "next/link"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { TextB, TextH } from "@/app/comps"

import { ISection } from "./SidebarData"

export function SidebarGroup(params: { section: ISection }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`
            px-4 py-2 flex items-center
            justify-between mb-2
            border-b-2 border-secondary first:pt-0
          `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <TextH className={"text-muted-foreground"} v="h5">
          {params.section.title}
        </TextH>
        {isOpen ? <ArrowDownIcon size={13.5} /> : <ArrowUpIcon size={13.5} />}
      </div>
      {isOpen &&
        params.section.group.map((val, i) => (
          <Link
            key={i}
            href={val.link}
            className="hover:[&>*]:bg-secondary [&>p]:text-white"
          >
            <div className={"pr-4 pl-10 py-2 "}>
              <TextB v="p5" className="text-primary-foreground">
                {val.name}
              </TextB>
            </div>
          </Link>
        ))}
    </div>
  )
}
