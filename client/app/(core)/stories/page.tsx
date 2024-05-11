"use client"
import React from "react"
import { TextB, TextH } from "@/comps"

export default function EpicsPage() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div>
            <TextH>Data 1</TextH>
            <TextB>Some songs</TextB>
          </div>
        </div>
        <div className="flex-1">Description</div>
      </div>
    </div>
  )
}
