import { TextH } from "@/comps";
import { CheckCircle } from "lucide-react";

export function CheckListSection() {
  return (
    <>
      <div className=" w-full flex items-center gap-x-4 py-2">
        <CheckCircle size={14} />
        <div className="flex items-center py-2 w-full gap-x-2">
          <TextH v="h5">Checklist 2/2</TextH>
        </div>
      </div>
      <div className="ml-8 flex w-full flex-col gap-x-4 border-b-[1px]">
        <div className="flex w-full items-center gap-x-2 py-1">
          <input type="checkbox" />
          <TextH v="h5">Item 1</TextH>
        </div>
        <div className="flex w-full items-center gap-x-2 py-1">
          <input type="checkbox" />
          <TextH v="h5">Item 2</TextH>
        </div>
        <div className="flex w-full items-center gap-x-2 py-1">
          <input type="checkbox" />
          <TextH v="h5">Item 3</TextH>
        </div>
        <div className="flex w-full items-center gap-x-2 py-1">
          <input type="checkbox" />
          <TextH v="h5">Item 4</TextH>
        </div>
      </div>
    </>
  )
}
