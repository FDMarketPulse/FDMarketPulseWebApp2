import * as T from "./types";

// initial~
export const defaultState: T.Store = {
  status: {
    sectorReturn: "SUCCESS",
    secIndData: "SUCCESS",
    newsList: "SUCCESS",
    newsContent: "SUCCESS",
    macroData: "SUCCESS"
  },
  globalDate: 0,
  sectorReturn: [],
  secIndData: [],
  newsList: [],
  newsContent: { id: "", content: [], summary: "" },
  macroData:[]
};
