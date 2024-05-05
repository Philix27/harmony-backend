"use client"

import { TextB, TextH } from "@/comps"
import { cn } from "@/lib"
import { LoaderIcon } from "lucide-react"

import { data, getSocialInfo } from "./listData"

export function ListTiles() {
  return (
    <div className="w-full">
      {data.map((val) => (
        <div
          className={`
              flex-grow border-2 bg-card 
              rounded-md p-2 flex 
              items-center justify-between h-full
              hover:shadow-md mb-2
            `}
        >
          <div className="flex h-full">
            <div
              className={cn(
                `
                w-[50px] h-[50px] rounded-[25px] flex flex-col 
                items-center justify-center mr-4 
              `,
                getSocialInfo(val.social).bg
              )}
            >
              {getSocialInfo(val.social).icon}
            </div>
            <div>
              <TextH v="h5">{val.title}</TextH>
              <TextB v="p5">{val.msg}</TextB>
            </div>
          </div>
          <div>
            <LoaderIcon />
          </div>
        </div>
      ))}
    </div>
  )
}
