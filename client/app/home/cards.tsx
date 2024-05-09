import React from "react"

import { TextB, TextH } from "@/app/comps"
import { AppImg } from "@/app/lib"

const cardItems = [
  {
    title: "Funds",
    img: AppImg.person,
    subtitle: "Manage funds and finances",
  },
  {
    title: "Security",
    img: AppImg.lock,
    subtitle: "All transactions are secure",
  },
  {
    title: "Friends",
    img: AppImg.phone,
    subtitle: "Share funds between other friends and family",
  },
]
export default function CardsSection() {
  return (
    <div
      className={`
      grid md:grid-cols-3 grid-cols-1 
      items-start justify-center 
      w-full my-5 gap-4 mx-0
    `}
    >
      {cardItems.map((item, i) => (
        <div
          className={
            "border-r-ring md:mx-4 bg-primary rounded-md p-4 mb-5 max-h-[400px]"
          }
          key={i}
        >
          <div className="p-2">
            <div className={"w-full flex items-center justify-center"}>
              <div className={`h-[300px] w-[250px]`}>
                <img src={item.img} className={"w-fit h-fit"} />
              </div>
            </div>

            <TextH v="h3" className="mb-4">
              {item.title}
            </TextH>
            <TextB v="p5">{item.subtitle}</TextB>
          </div>
        </div>
      ))}
    </div>
  )
}
