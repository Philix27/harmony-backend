import React from "react"
import { Input, TextB, TextH } from "@/comps"
import { MessageSquare, UserIcon } from "lucide-react"

export function CommentSection() {
  return (
    <div className="border-b-[1px]">
      <div className=" w-full flex items-center gap-x-4 py-2">
        <MessageSquare size={15} />
        <div className="flex items-center py-2 w-full gap-x-2">
          <Input type="text" placeholder="write a comment" />
        </div>
      </div>
      <div className="rounded-md border-b-[1px] bg-secondary px-2 mb-2">
        <div className="w-full flex items-center justify-between gap-x-4">
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
      <div className="rounded-md border-b-[1px] bg-secondary px-2 mb-2">
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
      <div className="rounded-md border-b-[1px] bg-secondary px-2 mb-2">
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
      <div className="rounded-md border-b-[1px] bg-secondary px-2 mb-2">
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
  )
}
