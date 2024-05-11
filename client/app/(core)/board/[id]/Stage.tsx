"use client"

import React from "react"
import { TextB, TextH } from "@/comps"
import { MoreVerticalIcon, Plus } from "lucide-react"

import { TaskCard } from "./TaskCard"

export function Stage(props: { name: string }) {
  return (
    <div className="h-full w-[300px] rounded-lg ">
      <div className="bg-secondary flex items-center justify-between border-b-2 p-2">
        <TextH v="h5">{props.name}</TextH>
        <div className="flex items-center justify-center gap-x-4">
          <div
            className={`
            bg-secondary hover:bg-primary 
          flex size-[30px] items-center
          justify-center rounded-[15px]
          `}
          >
            <Plus size={14} />
          </div>
          <div
            className={`bg-secondary hover:bg-primary 
          flex size-[30px] items-center
          justify-center rounded-[15px]`}
          >
            <MoreVerticalIcon size={16} />
          </div>
        </div>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}
