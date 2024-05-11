import { TextH } from "@/comps"
import { AlarmClock } from "lucide-react"

export function StartStopDate() {
  return (
    <div className=" w-full border-b-[1px] flex items-center gap-x-4 py-2">
      <AlarmClock size={14} />
      <div className="flex items-center justify-between py-2 w-full">
        <TextH v="h5">Start: 7th May</TextH>
        <TextH v="h5">Stop: 9th May</TextH>
      </div>
    </div>
  )
}
