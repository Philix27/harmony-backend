import React from "react"
import { AppPages } from "@/lib"
import {
  AlarmPlus,
  CircleDotIcon,
  CircleEllipsis,
  LayoutDashboard,
  Settings,
} from "lucide-react"

import { ASection } from "./ASection"

export default function SidebarSections() {
  return (
    <div className={""}>
      <ASection
        title="Overview"
        data={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            link: AppPages.dashboard,
          },
          {
            title: "Settings",
            icon: Settings,
            link: AppPages.dashboard,
          },
        ]}
      />
      <ASection
        title="Project"
        data={[
          {
            title: "Board1",
            icon: CircleEllipsis,
            link: AppPages.schedule.automate,
          },
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
        ]}
      />
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
      <ASection
        title="Scheduler"
        data={[
          {
            title: "Calender",
            icon: AlarmPlus,
            link: AppPages.schedule.automate,
          },
          {
            title: "Event",
            icon: AlarmPlus,
            link: AppPages.schedule.automate,
          },
          {
            title: "Schedule",
            icon: AlarmPlus,
            link: AppPages.schedule.automate,
          },
        ]}
      />
    </div>
  )
}
