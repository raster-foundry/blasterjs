import * as ss from "styled-system";
import { createPropTypes } from "@styled-system/prop-types";

const textShadow = ss.style({
  prop: "textShadow",
  cssProperty: "textShadow"
});

const textOverflow = ss.style({
  prop: "textOverflow",
  cssProperty: "textOverflow"
});

const textDecoration = ss.style({
  prop: "textDecoration",
  cssProperty: "textDecoration"
});

const textTransform = ss.style({
  prop: "textTransform",
  cssProperty: "textTransform"
});

const whiteSpace = ss.style({
  prop: "whiteSpace",
  cssProperty: "whiteSpace"
});

export const compose = ss.compose;

export const COMMON = compose(
  ss.color,
  ss.display,
  ss.space
);

export const BORDER = compose(ss.border);

export const BACKGROUND = compose(ss.background);

export const TYPOGRAPHY = compose(
  textDecoration,
  textOverflow,
  textShadow,
  textTransform,
  whiteSpace,
  ss.typography
);

export const LAYOUT = compose(
  ss.size,
  ss.width,
  ss.height,
  ss.minWidth,
  ss.minHeight,
  ss.maxWidth,
  ss.maxHeight,
  ss.overflow,
  ss.verticalAlign
);

export const POSITION = compose(ss.position);

export const FLEX_CONTAINER = compose(
  // flex container props (display: flex)
  ss.flexBasis,
  ss.flexDirection,
  ss.flexWrap,
  ss.alignContent,
  ss.alignItems,
  ss.justifyContent,
  ss.justifyItems
);

export const FLEX_ITEM = compose(
  // flex container child props
  ss.flex,
  ss.justifySelf,
  ss.alignSelf,
  ss.order
);

export const FLEXBOX = ss.flexbox;
export const GRID = ss.grid;

export const MISC = compose(
  ss.opacity,
  ss.boxShadow
);

export const STYLED = compose(
  COMMON,
  BORDER,
  BACKGROUND,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX_CONTAINER,
  FLEX_ITEM,
  MISC
);

export const PROPTYPES = {
  COMMON: createPropTypes(COMMON.propNames),
  BORDER: createPropTypes(BORDER.propNames),
  BACKGROUND: createPropTypes(BACKGROUND.propNames),
  TYPOGRAPHY: createPropTypes(TYPOGRAPHY.propNames),
  LAYOUT: createPropTypes(LAYOUT.propNames),
  POSITION: createPropTypes(POSITION.propNames),
  FLEX_CONTAINER: createPropTypes(FLEX_CONTAINER.propNames),
  FLEX_ITEM: createPropTypes(FLEX_ITEM.propNames),
  MISC: createPropTypes(MISC.propNames),
  FLEXBOX: createPropTypes(FLEXBOX.propNames),
  GRID: createPropTypes(GRID.propNames),
  STYLED: createPropTypes(STYLED.propNames)
};
