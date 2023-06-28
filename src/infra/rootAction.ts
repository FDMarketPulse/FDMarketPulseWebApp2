import { DashAction } from "@/infra/features/dashboard";
import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof DashAction>;

export default AllActions;
