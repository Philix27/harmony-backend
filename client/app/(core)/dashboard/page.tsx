"use client"

import React, { useEffect, useState } from "react"
import { AnnouncementGetAllResponse, ApiRoutes } from "@/sdk"

export default function Page() {
  const api = new ApiRoutes()
  const [announcements, setAnnouncements] =
    useState<AnnouncementGetAllResponse>()

  async function runAm() {
    const res = await api.announcementGetAll({
      limit: 0,
    })
    setAnnouncements(res)
    console.log("Result", res)
  }
  useEffect(() => {
    runAm()
  }, [])

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {announcements?.data.map((val, i) => (
        <div key={i} className="mb-3 mt-2 py-2 px-8 bg-card">
          <p>{val.title}</p>
          <p>{val.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
