import React from "react"
import { ASection } from "./ASection"
import { AppPages } from "@/lib"
import { CircleDotIcon } from "lucide-react"

export default function Docs() {
  return (
    <ASection
      title="Documents"
      data={[
        {
          title: "Planning",
          icon: CircleDotIcon,
          link: AppPages.schedule.automate,
        },
        {
          title: "Interview",
          icon: CircleDotIcon,
          link: AppPages.schedule.automate,
        },
      ]}
    />
  )
}
