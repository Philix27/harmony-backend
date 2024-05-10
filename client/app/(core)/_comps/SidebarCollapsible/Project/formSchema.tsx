import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  desc: z.string().min(2, {
    message: "Username must be at least 6 characters.",
  }),
})

export const defaultValues: z.infer<typeof formSchema> = {
  name: "",
  desc: "",
}

export type IFormSchema = z.infer<typeof formSchema>
