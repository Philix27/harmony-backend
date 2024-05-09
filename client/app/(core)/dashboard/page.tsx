"use client"

import React, { useEffect, useState } from "react"
import {  ApiRoutes, AnnouncementGetAllResponse } from "apikit"

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
  }, [runAm])

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {announcements?.data.map((val, i) => (
        <div key={i} className="bg-card mb-3 mt-2 px-8 py-2">
          <p>{val.title}</p>
          <p>{val.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
