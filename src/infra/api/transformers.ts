// import { AxiosTransformer } from "axios";
// import camelCaseKeys from "camelcase-keys";
// import snakeCaseKeys from "snakecase-keys";
// import { oc } from "ts-optchain";
//
// export const InfNaNJsonTransformer: AxiosTransformer = (data, headers) => {
//   if (!isApplicationJson(headers)) return data;
//
//   if (typeof data === "string") {
//     data = data.replace(/\sNaN(,)?/g, `"NaN"$1`).replace(/(-)?Infinity(,)?/g, `"$1Infinity"$2`);
//
//     try {
//       data = JSON.parse(data, (_, value) => {
//         switch (value) {
//           case "NaN":
//             return NaN;
//           case "Infinity":
//             return Infinity;
//           case "-Infinity":
//             return -Infinity;
//           default:
//             return value;
//         }
//       });
//     } catch (e) {
//       if (import.meta.env.VITE_MODE_ENV === "development") console.error(e);
//     }
//   }
//
//   return data;
// };
//
// export const SnakeCaseKeysTransformer: AxiosTransformer = (data, headers) => {
//   if (isApplicationJson(headers)) return data;
//
//   if (typeof data === "object" && !(data instanceof FormData)) {
//     return snakeCaseKeys(data, { deep: true });
//   }
//   return data;
// };
//
// export const CamelCaseKeysTransformer: AxiosTransformer = (data, headers) => {
//   if (!isApplicationJson(headers)) return data;
//
//   if (typeof data === "object" && !(data instanceof FormData)) {
//     if (Array.isArray(data) && typeof data[0] === "string") return data;
//     return camelCaseKeys(data, { deep: true });
//   }
//   return data;
// };
//
// function isApplicationJson(headers: any) {
//   return (
//     oc(headers)
//       ["content-type"]("text/plain")
//       .toLowerCase() === "application/json"
//   );
// }
