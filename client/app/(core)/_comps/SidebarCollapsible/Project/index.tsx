import React, { useState } from "react"
import { AppDialog, AppInput, Button, Form } from "@/comps"
import { AppPages, AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleEllipsis, Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { ASection } from "../ASection"
import { IFormSchema, defaultValues, formSchema } from "./formSchema"

export default function ProjectSection() {
  const boardStore = AppStores.useBoardStore()
  const [show, setShow] = useState(false)

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // 2. Define a submit handler.
  async function onSubmit() {
    console.log("Submit clicked", form.getValues("name"))

    try {
      boardStore.addBoard({
        name: form.getValues("name"),
        desc: form.getValues("desc"),
      })
      form.reset()
      //   const invoiceId = await t.mutateAsync()
      //   setInvId(invoiceId)
      toast.success("Invoice created")
    } catch (error) {
      toast.error("Check your form and fill every")
    }
  }
  return (
    <>
      <ASection
        title="Project"
        data={
          boardStore.boardList.length < 1
            ? [
                {
                  title: "Add new board",
                  icon: Plus,
                  onClick: () => setShow((prev) => !prev),
                },
              ]
            : [
                ...boardStore.boardList.map((val, i) => {
                  return {
                    title: val.name,
                    link: `${AppPages.board}/${i}`,
                    icon: CircleEllipsis,
                  }
                }),
                {
                  title: "Add new board",
                  icon: Plus,
                  onClick: () => setShow((prev) => !prev),
                },
              ]
        }
      />

      <AppDialog
        isOpen={show}
        title={"Add Board"}
        desc={"Board Desc"}
        onClose={() => setShow(false)}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`
            my-8 flex w-full 
            flex-col 
            items-center 
            justify-center
        `}
          >
            <div
              // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
              className={"flex w-[90%] flex-col items-start"}
            >
              <AppInput
                control={form.control}
                name="name"
                label="Name of board"
                place="Name of board"
              />
              <AppInput
                control={form.control}
                name="desc"
                label="Purpose"
                place="Description"
              />
              <div className="flex w-full items-center justify-center py-3">
                <Button variant={"outline"} type="submit">
                  Create new board
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </AppDialog>
    </>
  )
}
