import { useState } from "react"
import { TextB, TextH } from "@/comps"
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react"

import SectionSubItem from "./SubItem"

export function ASection(props: {
  title: string
  data: {
    title: string
    icon: LucideIcon
    link: string
  }[]
}) {
  const [showSection, setShowSection] = useState(false)

  return (
    <div
      className={"border-b-2 px-4 py-1 "}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowSection((prev) => !prev)
      }}
    >
      <div className="flex items-start justify-between">
        <TextH v={"h6"} className={"text-muted-foreground"}>
          {props.title}
        </TextH>
        {showSection ? (
          <ChevronUp className={"text-muted-foreground w-5 h-5"} />
        ) : (
          <ChevronDown className={"text-muted-foreground w-5 h-5"} />
        )}
      </div>
      {showSection && (
        <div className="pt-2">
          {props.data.map((val) => (
            <SectionSubItem title={val.title} icon={val.icon} link={val.link} />
          ))}
        </div>
      )}
    </div>
  )
}
