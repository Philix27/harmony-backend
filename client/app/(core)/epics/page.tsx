"use client"

import React from "react"

import { Epics } from "./epicsList"

export default function EpicsPage() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Epics />
        <div className="flex-1">Descriptions</div>
      </div>
    </div>
  )
}
