import React from "react";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

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
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes
};

export default Label;
