"use client"

import React from "react"
import { TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import {
  CheckCircle,
  Clock10,
  MessageCircle,
  MoreVerticalIcon,
  Plus,
} from "lucide-react"

export function TaskCard() {
  return (
    <div className="bg-card mt-2 rounded-md" onClick={() => {}}>
      <div className="border-b-[1px] py-2 px-3 flex items-center justify-between">
        <TextB>Do this</TextB>
        <div
          className={`bg-secondary hover:bg-primary 
          rounded-[15px] w-[30px] h-[30px]
          items-center justify-center flex`}
        >
          <Plus size={14} />
        </div>
      </div>
      <div className="py-2 px-3  flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Clock10 size={12} />
          <TextB v="p6">Due date</TextB>
        </div>
        <div className="flex items-center gap-x-2">
          <MessageCircle size={12} />
          <TextB v="p6">15</TextB>
        </div>
        <div className="flex items-center gap-x-2">
          <CheckCircle size={12} />
          <TextB v="p6">3/7</TextB>
        </div>
      </div>
    </div>
  )
}
