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
import Docs from "./Docs"
import ProjectSection from "./Project"

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
      <ProjectSection />
      <Docs />
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
