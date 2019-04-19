import * as base from "./base";
import * as components from "./components";
import icons from "./icons";
import { buildTheme } from "../utils";
import merge from "lodash.merge";

export const theme = { ...buildTheme(components, base), icons };

console.log(theme);
