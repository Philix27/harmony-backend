import React, { ReactNode } from "react"

import { DocumentsSidebar } from "./_comps/sidebar"

export default function DocumentLayout(props: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      {/* <DocumentsSidebar /> */}
      {props.children}
    </div>
  )
}
