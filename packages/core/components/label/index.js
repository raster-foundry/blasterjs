import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const Label = styled.label`
  font-size: ${themeGet('label.fontSizes.fontSize')};

  ${themeGet("label.styles")}
  ${COMMON}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
`;

Label.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes
};

export default Label;
