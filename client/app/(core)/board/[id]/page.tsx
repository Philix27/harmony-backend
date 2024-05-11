"use client"

import React from "react"
import { AppStores } from "@/lib"
import { Plus } from "lucide-react"

import { Stage } from "./Stage"

export default function BoardStagePage({ params }: { params: { id: string } }) {
  const store = AppStores.useBoardStageStore()
  const newList = store.boardStageList.filter(
    (val, i) => val.boardId === params.id
  )
  return (
    <div>
      <div className="flex gap-x-4 p-4">
        {newList.map((val, i) => (
          <Stage key={i} name={val.name} />
        ))}
        <div
          className={`bg-card hover:bg-primary 
        flex size-[30px]
        cursor-pointer items-center
        justify-center
        rounded-[15px]`}
        >
          <Plus size={14} />
        </div>
      </div>
    </div>
  )
}
