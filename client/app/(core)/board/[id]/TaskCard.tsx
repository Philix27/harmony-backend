"use client"

import React, { useState } from "react"
import { AppDialog, TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import {
  CheckCircle,
  Clock10,
  MessageCircle,
  MoreVerticalIcon,
  Plus,
} from "lucide-react"

import TaskCardDialog from "./TaskCardDialog"

export function TaskCard() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div
        className="bg-card mt-2 rounded-md cursor-pointer"
        onClick={() => setShow(true)}
      >
        <div className="flex items-center justify-between border-b-[1px] px-3 py-2">
          <TextB>Do this</TextB>
          <div
            className={`bg-secondary hover:bg-primary 
          flex h-[30px] w-[30px]
          items-center justify-center rounded-[15px]`}
          ></div>
        </div>
        <div className="flex items-center  justify-between px-3 py-2">
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
      <TaskCardDialog show={show} setShow={setShow} />
    </>
  )
}
