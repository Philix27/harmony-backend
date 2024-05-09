"use client"

import { z } from "zod"

export const formSchema = z.object({
  // To
  toBusinessName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  toWebsite: z.string().optional(),
  toAddress: z.string().optional(),
  toEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  toPhone: z.string().optional(),
  // From
  fromBusinessName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fromPhone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fromEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fromDate: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  fromAddress: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  // Footer
  footerNote: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  thanksMsg: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
})

export const defaultValues: z.infer<typeof formSchema> = {
  footerNote: "",
  thanksMsg: "",
  toBusinessName: "",
  toEmail: "",
  fromBusinessName: "",
  fromPhone: "",
  fromEmail: "",
  fromDate: "",
  fromAddress: "",
  toWebsite: "",
  toAddress: "",
  toPhone: "",
}

export type IFormSchema = z.infer<typeof formSchema>
