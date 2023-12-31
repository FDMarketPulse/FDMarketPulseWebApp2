import {RootState} from "@/infra/rootState";


export const sectorIndustryReturn = ({ dashboard }: RootState) =>
  dashboard.secIndData;

export const marketNewsOverall = ({ dashboard }: RootState) =>
  dashboard.newsList;

export const isNewsLoading=  ({ dashboard }: RootState) =>
  dashboard.status.newsList === "REQUEST"

export const marketNewsContent = ({ dashboard }: RootState) =>
  dashboard.newsContent;

export const marketMacroOhlcData = ({ dashboard }: RootState) =>
    dashboard.macroData;


