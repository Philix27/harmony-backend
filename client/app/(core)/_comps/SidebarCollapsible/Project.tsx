import React, { useState } from "react"
import { AppDialog, Button, Input, Label } from "@/comps"
import { AppPages, AppStores } from "@/lib"
import { CircleEllipsis, Plus } from "lucide-react"

import { ASection } from "./ASection"

export default function ProjectSection() {
  const boardStore = AppStores.useBoardStore()
  const [show, setShow] = useState(false)
  return (
    <>
      <ASection
        title="Project"
        data={
          boardStore.boardList.length < 1
            ? [
                {
                  title: "Add new board",
                  icon: Plus,
                  onClick: () => setShow((prev) => !prev),
                },
              ]
            : boardStore.boardList.map((val, i) => {
                return {
                  title: val.name,
                  link: AppPages.schedule.automate,
                  icon: CircleEllipsis,
                }
              })
        }
      />

      <AppDialog
        isOpen={show}
        title={"Add Board"}
        desc={"Board Desc"}
        onClose={() => setShow(false)}
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <Button type="submit" onClick={() => setShow(false)}>
          Save changes
        </Button>
      </AppDialog>
    </>
  )
}
