import {RootState} from "@/infra/rootState";


export const userAuthState = ({ user }: RootState) =>
  user.authState