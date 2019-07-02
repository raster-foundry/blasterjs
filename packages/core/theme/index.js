import * as base from "./base";
import * as components from "./components";
import { buildTheme } from "../utils";
import merge from "lodash.merge";

export const getTheme = (userDefined = {}) => {
  const mergedBase = merge(base, buildTheme(base, userDefined));
  const builtBase = buildTheme(mergedBase, components);
  return merge({ ...builtBase }, userDefined);
};
