import { useState } from "react"
import { TextB, TextH } from "@/comps"
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react"

import SectionSubItem from "./SubItem"

export function ASection(props: {
  title: string
  data: {
    title: string
    icon: LucideIcon
    link?: string
    onClick?: VoidFunction
  }[]
}) {
  const [showSection, setShowSection] = useState(false)

  return (
    <div
      className={"border-b-[1px] px-4 py-1 "}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowSection((prev) => !prev)
      }}
    >
      <div className="flex items-start justify-between">
        <TextH v={"h5"} className={"text-muted-foreground font-bold"}>
          {props.title}
        </TextH>
        {showSection ? (
          <ChevronUp className={"text-muted-foreground size-5"} />
        ) : (
          <ChevronDown className={"text-muted-foreground size-5"} />
        )}
      </div>
      {showSection && (
        <div className="pt-2">
          {props.data.map((val) => (
            <SectionSubItem
              title={val.title}
              icon={val.icon}
              link={val.link}
              onClick={val.onClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
