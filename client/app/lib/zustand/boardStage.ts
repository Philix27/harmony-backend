import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface IBoardStage {
  id?: number
  boardId: string
  name: string | "BACKLOG"
  desc: string
}
type ISlice = {
  boardStageList: Array<IBoardStage>
  addBoardStage: (val: IBoardStage) => void
  deleteBoard: (id: number) => void
  updateBoard: (val: IBoardStage) => void
}

export const useBoardStageStore = create(
  persist<ISlice>(
    (set) => ({
      boardStageList: [],
      addBoardStage: (val) =>
        set((state) => {
          let newStage = {
            name: val.name,
            desc: val.desc,
            boardId: val.boardId,
            id: state.boardStageList.length,
          }
          return {
            boardStageList: [...state.boardStageList, newStage],
          }
        }),
      deleteBoard: (id) =>
        set((state) => ({
          boardStageList: state.boardStageList.filter(
            (val, i) => val.id! !== id
          ),
        })),
      updateBoard: (val) =>
        set((state) => ({ boardStageList: [...state.boardStageList] })),
    }),
    {
      name: "board-stage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
