import {DashType} from "@/infra/features/dashboard"
import {ChatType} from "@/infra/features/chatbot"

export type RootState = {
  dashboard: DashType.Store;
  chatbot: ChatType.Store;
};