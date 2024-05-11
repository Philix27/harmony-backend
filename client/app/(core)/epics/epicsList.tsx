import { TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { SearchIcon } from "lucide-react"

export function Epics() {
  const store = AppStores.useEpicStore()
  return (
    <div className="w-[400px] border-l-[1px]">
      <div className="flex h-[40px] items-center justify-center border-b-DEFAULT">
        <div className="">
          <SearchIcon size={15} />
        </div>
      </div>
      <div className={"h-full overflow-y-scroll"}>
        {store.epicList.map((val, i) => (
          <EpicCard key={i} />
        ))}
      </div>
    </div>
  )
}

export function EpicCard() {
  return (
    <div className={"bg-card hover:bg-primary mb-[1px] px-4 py-2"}>
      <TextH v="h5">Data 1</TextH>
      <TextB>Some songs</TextB>
    </div>
  )
}
