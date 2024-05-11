import { ReactNode } from "react"

import { Button } from "."
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog"

export function AppDialog(props: {
  title: string
  desc: string
  isOpen: boolean
  onClose: VoidFunction
  children: ReactNode
  footer?: JSX.Element
}) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      {/* <DialogTrigger asChild suppressHydrationWarning> */}
      {/* <p>Say p</p> */}
      {/* <Button variant="outline">{props.title}</Button> */}
      {/* </DialogTrigger> */}
      <DialogContent
        className="w-[70vw] bg-card"
        onCloseAutoFocus={props.onClose}
        // className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.desc}</DialogDescription>
        </DialogHeader>
        {props.children}
        {props.footer && <DialogFooter>{props.footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
