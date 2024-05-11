import { useBoardStore } from "./board";
import { useBoardStageStore } from "./boardStage";
import { useEpicStore } from "./epics";
import { useSettingsStore } from "./settings";


export const AppStores = {
  useSettingsStore,
  useBoardStore,
  useBoardStageStore,
  useEpicStore,
}