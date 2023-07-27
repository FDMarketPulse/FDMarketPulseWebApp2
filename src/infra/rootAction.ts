import {DashAction} from "@/infra/features/dashboard";
import {ChatAction} from "@/infra/features/chatbot";
import {UserAction} from "@/infra/features/user"
import {ActionType} from "typesafe-actions";

type AllActions = ActionType<typeof DashAction> |ActionType<typeof ChatAction> |ActionType<typeof UserAction>;

export default AllActions;
