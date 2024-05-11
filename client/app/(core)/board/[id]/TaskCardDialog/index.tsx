import React from "react"
import { AppDialog, Input, TextB, TextH } from "@/comps"
import { MessageSquare, UserIcon, Users } from "lucide-react"

import { CheckListSection } from "./Checklist"
import { DescSection } from "./Desc"
import { StartStopDate } from "./StartStopDate"
import { CommentSection } from "./Comment"

export default function TaskCardDialog(props: {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <AppDialog
      isOpen={props.show}
      title={"Title of Task"}
      desc={"Board Desc"}
      onClose={() => props.setShow(false)}
    >
      <div className="max-h-[80vh] w-full">
        <div className="h-full overflow-y-scroll overflow-x-hidden">
          <div className=" w-full border-b-[1px] flex items-center justify-between py-2">
            <TextH v="h5">Progess</TextH>
            <TextH v="h5">Mark as completed</TextH>
          </div>
          <DescSection />
          <StartStopDate />
          <div className=" w-full border-b-[1px] flex items-center gap-x-4 py-2">
            <Users size={14} />
            <div className="flex items-center py-2 w-full gap-x-2">
              <TextH v="h5">Angela,</TextH>
              <TextH v="h5">Nkechi</TextH>
            </div>
          </div>
          <CheckListSection />
          <CommentSection />
        </div>
      </div>
    </AppDialog>
  )
}
