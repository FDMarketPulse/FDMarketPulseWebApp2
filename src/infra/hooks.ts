import { isEqual } from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "./rootState";

export function useRootSelector<R = unknown>(
  selector: (state: RootState) => R,
  equalityFn?: (left: R, right: R) => boolean
) {
  if (equalityFn === undefined) equalityFn = isEqual;
  return useSelector(selector, equalityFn);
}
