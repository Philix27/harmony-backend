"use client"

import React from "react"
import { TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { MoreVerticalIcon, Plus } from "lucide-react"

import { TaskCard } from "./TaskCard"

export function Stage(props: { name: string }) {
  return (
    <div className="h-full w-[300px] rounded-lg ">
      <div className="bg-secondary p-2 border-b-2 flex items-center justify-between">
        <TextH v="h5">{props.name}</TextH>
        <div className="flex items-center justify-center gap-x-4">
          <div className="bg-card hover:bg-primary rounded-[15px] w-[30px] h-[30px] items-center justify-center flex">
            <Plus size={14} />
          </div>
          <MoreVerticalIcon size={16} />
        </div>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}
