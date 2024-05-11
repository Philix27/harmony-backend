import React from "react"
import { TextB } from "@/comps"

export function DescSection() {
  return (
    <div className={"py-4 border-b-[1px]"}>
      <TextB
        className={"font-light tracking-wide leading-5"}
      >{`In this task, you will analyze the collected data 
          to uncover insights and trends. You'll use various statistical 
          methods, data visualization techniques, and data mining algorithms 
          to process and interpret the data. The goal is to extract 
          valuable information that will aid 
          in making data-driven decisions 
          and improvements to our processes and strategies.
          Your analytical skills and attention to detail will 
          play a pivotal role in the successful completion of this 
          task. We encourage you to collaborate with the data science team and 
          other stakeholders to ensure the accuracy and relevance of your findings.
          Let's turn raw data into actionable knowledge!`}</TextB>
    </div>
  )
}
