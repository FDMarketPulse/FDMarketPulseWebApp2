import { RootState } from "@/infra/rootState";

export const sectorReturn = ({ dashboard }: RootState) =>
  dashboard.sectorReturn;

export const sectorIndustryReturn = ({ dashboard }: RootState) =>
  dashboard.secIndData;

export const marketNewsOverall = ({ dashboard }: RootState) =>
  dashboard.newsList;

export const marketNewsContent = ({ dashboard }: RootState) =>
  dashboard.newsContent;
