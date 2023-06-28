// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosTransformer } from "axios";
// import * as T from "./transformers";
//
// export const serverUrl =
//   import.meta.env.VITE_MODE_ENV === "production"
//     ? `${window.location.origin}/api`
//     : `${window.location.protocol}//${window.location.hostname}:8000`;
//
// export class ApiClient {
//   private readonly client: AxiosInstance;
//
//   constructor(baseURL: string, config?: AxiosRequestConfig) {
//     const {
//       transformRequest = [T.SnakeCaseKeysTransformer, ...(axios.defaults.transformRequest as AxiosTransformer[])],
//       transformResponse = [
//         ...(axios.defaults.transformResponse as AxiosTransformer[]),
//         T.InfNaNJsonTransformer,
//         T.CamelCaseKeysTransformer
//       ],
//       ...rest
//     } = config || {};
//
//     this.client = axios.create({ baseURL, transformRequest, transformResponse, ...rest });
//   }
//
//   public get = <R = void>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
//     this.execute<R>("GET", url, null, config);
//
//   public put = <R = void>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
//     this.execute<R>("PUT", url, data, config);
//
//   public post = <R = void>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
//     this.execute<R>("POST", url, data, config);
//
//   public delete = <R = void>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
//     this.execute<R>("DELETE", url, data, config);
//
//   private execute<R>(
//     method: "GET" | "PUT" | "POST" | "DELETE",
//     url: string,
//     data?: any,
//     config?: any
//   ): Promise<AxiosResponse<R>> {
//     url = url.replace(/^\/*/, "");
//
//     switch (method) {
//       case "GET":
//         return this.client.get<R>(url, config);
//       case "PUT":
//         return this.client.put<R>(url, data, config);
//       case "POST":
//         return this.client.post<R>(url, data, config);
//       case "DELETE":
//         if (data) {
//           config = { ...config, data };
//         }
//         return this.client.delete<R>(url, config);
//     }
//   }
// }
//
// export const api = new ApiClient(`${serverUrl}/`);
