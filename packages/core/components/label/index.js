import React from "react";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, TYPOGRAPHY, FLEX_ITEM, PROPTYPES } from "../../constants";

const Label = styled.label`
  font-size: ${tg("label.fontSizes.fontSize")};

  ${tg("label.overrides")}
  ${compose(
    COMMON,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

Label.propTypes = {
  ...PROPTYPES.COMMON,
  ...PROPTYPES.TYPOGRAPHY,
  ...PROPTYPES.FLEX_ITEM
};

export default Label;
