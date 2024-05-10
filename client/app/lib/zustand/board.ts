import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface IBoard {
  id?: string
  name: string
  desc: string
}
type ISlice = {
  boardList: Array<IBoard>
  addBoard: (val: IBoard) => void
  deleteBoard: (id: string) => void
  updateBoard: (val: IBoard) => void
}

export const useBoardStore = create(
  persist<ISlice>(
    (set) => ({
      boardList: [],
      addBoard: (val) =>
        set((state) => ({ boardList: [...state.boardList, val] })),
      deleteBoard: (id) =>
        set((state) => ({
          boardList: state.boardList.filter((val, i) => val.id! !== id),
        })),
      updateBoard: (val) =>
        set((state) => ({ boardList: [...state.boardList] })),
    }),
    {
      name: "board",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
