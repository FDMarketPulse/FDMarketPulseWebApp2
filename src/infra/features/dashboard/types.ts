export type Store = {
  status: {
    sectorReturn: LoadingState;
    secIndData: LoadingState;
    newsList: LoadingState;
    newsContent: LoadingState;
  };
  globalDate: GlobalDate;
  sectorReturn: SecIndReturns[];
  secIndData: SecIndData[];
  newsList: NewsList[];
  newsContent: NewsContent;
};

export type LoadingState = "REQUEST" | "SUCCESS" | "FAILURE";
export type GlobalDate = number;

export type SecIndReturns = {
  description: string;
  market: string;
  change: number;
  perfW: number;
  perf1M: number;
  perf3M: number;
  perf6M: number;
  perfYtd: number;
  perfY: number;
  perf5Y: number;
  perfAll: number;
};

export type SecIndData = {
  type: string;
  value: SecIndValue[];
};

export type SecIndValue = {
  description: string;
  market: string;
  change: number;
  perfW: number;
  perf1M: number;
  perf3M: number;
  perf6M: number;
  perfYtd: number;
  perfY: number;
  perf5Y: number;
  perfAll: number;
};

export type NewsList = {
  type: string;
  result: NewsValue[];
};

export type NewsValue = {
  id: string;
  title: string;
  provider: string;
  published: number;
  sentiment: number;
};

export type NewsContent = {
  summary: string;
  id: string;
  content: string[];
};
