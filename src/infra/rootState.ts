import {DashType} from "@/infra/features/dashboard"
import {ChatType} from "@/infra/features/chatbot"
import {UserType} from "@/infra/features/user"

export type RootState = {
  dashboard: DashType.Store;
  chatbot: ChatType.Store;
  user: UserType.Store;
};