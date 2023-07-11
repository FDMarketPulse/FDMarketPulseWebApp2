import {DashAction} from "@/infra/features/dashboard";
import {ActionType} from "typesafe-actions";

import {ChatAction} from "@/infra/features/chatbot";

type AllActions = ActionType<typeof DashAction> |ActionType<typeof ChatAction>;

export default AllActions;
