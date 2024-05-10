import React from "react"
import { AppPages, AppStores } from "@/lib"
import { CircleEllipsis, Plus } from "lucide-react"

import { ASection } from "./ASection"

export default function ProjectSection() {
  const boardStore = AppStores.useBoardStore()
  return (
    <ASection
      title="Project"
      data={
        boardStore.boardList.length < 1
          ? [
              {
                title: "Add new board",
                icon: Plus,
                link: AppPages.schedule.automate,
              },
            ]
          : [
              {
                title: "Board2",
                icon: CircleEllipsis,
                link: AppPages.schedule.automate,
              },
              {
                title: "Board 3",
                icon: CircleEllipsis,
                link: AppPages.schedule.automate,
              },
              {
                title: "Settings",
                icon: CircleEllipsis,
                link: AppPages.schedule.automate,
              },
            ]
      }
    />
  )
}
