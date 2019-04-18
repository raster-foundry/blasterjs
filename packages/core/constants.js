import * as ss from "styled-system";

export const composer = ss.compose;

export const COMMON = composer(ss.color, ss.space);

export const BORDER = composer(ss.borders, ss.borderColor, ss.borderRadius);

export const BACKGROUND = composer(
  ss.background,
  ss.backgroundColor,
  ss.backgroundImage,
  ss.backgroundSize,
  ss.backgroundPosition,
  ss.backgroundRepeat
);

export const TYPOGRAPHY = composer(
  ss.fontFamily,
  ss.fontSize,
  ss.fontStyle,
  ss.fontWeight,
  ss.lineHeight,
  ss.textAlign,
  ss.letterSpacing
);

export const LAYOUT = composer(
  ss.display,
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

export const POSITION = composer(
  ss.position,
  ss.zIndex,
  ss.top,
  ss.right,
  ss.bottom,
  ss.left
);

export const FLEX_CONTAINER = composer(
  // flex container props (display: flex)
  ss.flexBasis,
  ss.flexDirection,
  ss.flexWrap,
  ss.alignContent,
  ss.alignItems,
  ss.justifyContent,
  ss.justifyItems
);

export const FLEX_ITEM = composer(
  // flex container child props
  ss.flex,
  ss.justifySelf,
  ss.alignSelf,
  ss.order
);

export const MISC = composer(ss.opacity, ss.boxShadow);

export const STYLED = composer(
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
