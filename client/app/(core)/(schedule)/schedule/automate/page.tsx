"use client"

import React from "react"
import { Button, TextB, TextH } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { ListTiles } from "./ListTile"
import { Tab } from "./Tab"
import { IFormSchema, defaultValues, formSchema } from "./formSchema"

export default function AutomatePage() {
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })
  return (
    <div className="w-full px-10 py-2">
      <div className="my-6 flex items-center justify-between">
        <TextH v="h2" className="text-muted-foreground">
          Automate
        </TextH>
        <Button>Add</Button>
      </div>
      <div>
        <Tab />
        <div className="flex h-full gap-x-4">
          <div className={"flex-grow"}>
            <ListTiles />
          </div>
          <div className={"flex-grow px-2 bg-card"}>
            <TextH v="h5">Title</TextH>
            <TextH v="h5">Message</TextH>
            <input type="text" className="p-2" placeholder="" />
            <AppInput placeholder="Title" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppInput(props: {
  placeholder?: string
  desc?: string
  label?: string
  type?: "text" | "password" | "number"
}) {
  return (
    <div>
      <label>{props.type}</label>
      <input type={props.type || "text"} placeholder={props.placeholder} />
      <div>{props.desc}</div>
    </div>
  )
}
