"use client"

import { Facebook, Linkedin, Slack, Twitter } from "lucide-react"

export type ISocial = "SLACK" | "FACEBOOK" | "LINKEDIN" | "DISCORD" | "WHATSAPP"

export const data: {
  title: string
  msg: string
  social: ISocial
}[] = [
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "FACEBOOK",
  },
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "SLACK",
  },
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "LINKEDIN",
  },
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "WHATSAPP",
  },
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "FACEBOOK",
  },
  {
    title: "Stand up",
    msg: "I worked on the navbar yesterday",
    social: "SLACK",
  },
]

export function getSocialInfo(params: ISocial): {
  icon: JSX.Element
  iconColor: string
  bg: string
} {
  switch (params) {
    case "FACEBOOK":
      return {
        icon: <Facebook className="text-blue-500" />,
        iconColor: "text-blue-500",
        bg: "bg-blue-100",
      }
    case "SLACK":
      return {
        icon: <Slack className="text-red-400" />,
        iconColor: "",
        bg: "bg-pink-100",
      }
    case "LINKEDIN":
      return {
        icon: <Linkedin className="text-sky-500" />,
        iconColor: "",
        bg: "bg-sky-100",
      }
    case "WHATSAPP":
      return {
        icon: <Twitter className="text-green-500" />,
        iconColor: "",
        bg: "bg-green-100",
      }

    default:
      return {
        icon: <Facebook className="text-blue-500" />,
        iconColor: "bg-blue=500",
        bg: "bg-sky-200",
      }
  }
}
