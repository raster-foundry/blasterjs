import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM, PROPTYPES } from "../../constants";

const ColorInput = styled.input`
  width: 4rem;
  height: 4rem;

  padding: ${themeGet("colorInput.space.p")};
  border: ${themeGet("colorInput.borders.border")};
  border-radius: ${themeGet("colorInput.radii.borderRadius")};

  ${themeGet("colorInput.overrides")}
  ${compose(
    COMMON,
    BORDER,
    LAYOUT,
    FLEX_ITEM
  )}
`;

ColorInput.propTypes = {
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.FLEX_ITEM
};

ColorInput.defaultProps = {
  type: "color",
  onChange: () => {}
};

export default ColorInput;
