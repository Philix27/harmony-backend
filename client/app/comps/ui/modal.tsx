import { ReactNode } from "react"

import { Button } from "."
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { Input } from "./input"
import { Label } from "./label"

export function AppDialog(props: {
  title: string
  desc: string
  isOpen: boolean
  onClose: VoidFunction
  children: ReactNode
}) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      {/* <DialogTrigger asChild suppressHydrationWarning> */}
      {/* <p>Say p</p> */}
      {/* <Button variant="outline">{props.title}</Button> */}
      {/* </DialogTrigger> */}
      <DialogContent
        onCloseAutoFocus={props.onClose}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.desc}</DialogDescription>
        </DialogHeader>
        {props.children}
        {/* <DialogFooter>
          <Button type="submit" onClick={props.onClose}>
            Save changes
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
