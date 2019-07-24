import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM } from "../../constants";

const ColorInput = styled.input`
  width: 4rem;
  height: 4rem;

  padding: ${themeGet("colorInput.space.p")};
  border: ${themeGet("colorInput.borders.border")};
  border-radius: ${themeGet("colorInput.radii.borderRadius")};

  ${themeGet("colorInput.styles")}
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${FLEX_ITEM}
`;

ColorInput.propTypes = {
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...LAYOUT.propTypes,
  ...FLEX_ITEM.propTypes
};

ColorInput.defaultProps = {
  type: "color",
  onChange: () => {}
};

export default ColorInput;
