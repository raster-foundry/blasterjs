import * as base from "./base";
import * as components from "./components";
import { buildTheme } from "../utils";
import merge from "lodash.merge";

const filterObjectByKeys = (o, allowed) => Object.keys(o, allowed)
.filter(key => allowed.includes(key))
.reduce((obj, key) => {
  obj[key] = o[key];
  return obj;
}, {});

const unFilterObjectByKeys = (o, allowed) => Object.keys(o, allowed)
.filter(key => !allowed.includes(key))
.reduce((obj, key) => {
  obj[key] = o[key];
  return obj;
}, {});

export const getTheme = (userDefined = {}) => {
  const userBase = filterObjectByKeys(userDefined, Object.keys(base));
  const userComponents = unFilterObjectByKeys(userDefined, Object.keys(base));
  const mergedBase = merge(base, userBase);
  const mergedComponents = merge(components, userComponents);
  const builtBase = buildTheme(mergedBase, mergedComponents);
  return builtBase;
};
