import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface IEpics {
  id?: string
  name: string
  desc: string
}
type ISlice = {
  epicList: Array<IEpics>
  addEpic: (val: IEpics) => void
  deleteEpic: (id: string) => void
  updateEpic: (val: IEpics) => void
}

export const useEpicStore = create(
  persist<ISlice>(
    (set) => ({
      epicList: [],
      addEpic: (val) =>
        set((state) => ({ epicList: [...state.epicList, val] })),
      deleteEpic: (id) =>
        set((state) => ({
          epicList: state.epicList.filter((val, i) => val.id! !== id),
        })),
      updateEpic: (val) => set((state) => ({ epicList: [...state.epicList] })),
    }),
    {
      name: "epics",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
