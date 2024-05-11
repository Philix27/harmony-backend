import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface IBoardStage {
  id?: number
  boardId: string
  name: string | "BACKLOG"
}
type ISlice = {
  boardStageList: Array<IBoardStage>
  filteredBoardStageList: Map<string, Array<IBoardStage>>
  // getBoardStageById: (id: string) => Array<IBoardStage>
  addBoardStage: (val: IBoardStage) => void
  deleteBoard: (id: number) => void
  updateBoard: (val: IBoardStage) => void
}
const mm = new Map()
const baseList = [
  {
    id: 1,
    boardId: "1",
    name: "Backlog",
  },
  {
    id: 2,
    boardId: "1",
    name: "In progress",
  },
  {
    id: 3,
    boardId: "2",
    name: "Backlog",
  },
  {
    id: 4,
    boardId: "2",
    name: "In progress",
  },
]
export const useBoardStageStore = create(
  persist<ISlice>(
    (set, get, sd) => ({
      boardStageList: baseList,
      filteredBoardStageList: new Map(),
      addBoardStage: (val) =>
        set((state) => {
          let newStage = {
            name: val.name,
            boardId: val.boardId,
            id: state.boardStageList.length,
          }

          let newMap
          if (state.filteredBoardStageList.has(val.boardId)) {
            let prevData = state.filteredBoardStageList.get(val.boardId)
            newMap = state.filteredBoardStageList.set(val.boardId, [
              ...prevData!,
              newStage,
            ])
          } else {
            newMap = state.filteredBoardStageList.set(val.boardId, [newStage])
          }

          return {
            boardStageList: [...state.boardStageList, newStage],
            filteredBoardStageList: newMap,
          }
        }),
      deleteBoard: (id) =>
        set((state) => ({
          boardStageList: state.boardStageList.filter(
            (val, i) => val.id! !== id
          ),
        })),
      updateBoard: () =>
        set((state) => ({ boardStageList: [...state.boardStageList] })),
    }),
    {
      name: "board-stage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
