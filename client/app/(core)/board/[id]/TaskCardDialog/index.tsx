import React from "react"
import { AppDialog, Input, TextB, TextH } from "@/comps"
import { MessageSquare, UserIcon, Users } from "lucide-react"

import { CheckListSection } from "./Checklist"
import { DescSection } from "./Desc"
import { StartStopDate } from "./StartStopDate"

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
      <div  className="max-h-[80vh] w-full">
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
          <div className=" w-full border-b-[1px] flex items-center gap-x-4 py-2">
            <MessageSquare size={15} />
            <div className="flex items-center py-2 w-full gap-x-2">
              <Input type="text" placeholder="write a comment" />
            </div>
          </div>
          <div className="rounded-md">
            <div className=" w-full flex items-center justify-between gap-x-4">
              <div className="flex items-center">
                <UserIcon size={15} className="mr-4" />
                <TextH v="h5">Solomon Grande</TextH>
              </div>
              <div className="py-2">
                <TextB v="p6">15th May, 2024</TextB>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-4 ml-8 pb-2">
              <TextB v="p6" className="pt-2">
                Which tools or software will be used for data analysis?
              </TextB>
            </div>
          </div>
          <div className="rounded-md">
            <div className=" w-full flex items-center justify-between gap-x-4">
              <div className="flex items-center">
                <UserIcon size={15} className="mr-4" />
                <TextH v="h5">Solomon Grande</TextH>
              </div>
              <div className="py-2">
                <TextB v="p6">15th May, 2024</TextB>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-4 ml-8 pb-2">
              <TextB v="p6" className="pt-2">
                Which tools or software will be used for data analysis?
              </TextB>
            </div>
          </div>
          <div className="rounded-md">
            <div className=" w-full flex items-center justify-between gap-x-4">
              <div className="flex items-center">
                <UserIcon size={15} className="mr-4" />
                <TextH v="h5">Solomon Grande</TextH>
              </div>
              <div className="py-2">
                <TextB v="p6">15th May, 2024</TextB>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-4 ml-8 pb-2">
              <TextB v="p6" className="pt-2">
                Which tools or software will be used for data analysis?
              </TextB>
            </div>
          </div>
          <div className="rounded-md">
            <div className=" w-full flex items-center justify-between gap-x-4">
              <div className="flex items-center">
                <UserIcon size={15} className="mr-4" />
                <TextH v="h5">Solomon Grande</TextH>
              </div>
              <div className="py-2">
                <TextB v="p6">15th May, 2024</TextB>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-4 ml-8 pb-2">
              <TextB v="p6" className="pt-2">
                Which tools or software will be used for data analysis?
              </TextB>
            </div>
          </div>
        </div>
      </div>
    </AppDialog>
  )
}
