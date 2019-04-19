import * as base from "./base";
import * as components from "./components";
import icons from "./icons";
import { buildTheme } from "../utils";
import merge from "lodash.merge";

export const getTheme = (userDefined = {}) => {
  const mergedBase = merge(base, userDefined);
  const builtBase = buildTheme(components, mergedBase);
  return merge({ ...builtBase, icons }, userDefined);
};
