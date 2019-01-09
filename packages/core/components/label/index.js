import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Text from "../text";
import { Size } from "../../common/size";

const Label = styled(Text)`
  ${props => {
    const size = {
      [Size.TINY]: 1,
      [Size.SMALL]: 1,
      [Size.MEDIUM]: 2,
      [Size.LARGE]: 3
    }[props.size || Size.MEDIUM];

    return css`font-size: ${themeGet(`fontSizes.${size}`)}`;
  }}
`;

Label.propTypes = {
  ...Text.propTypes,
  size: PropTypes.oneOf(Object.values(Size))
};

Label.defaultProps = {
  tag: "label",
  size: Size.MEDIUM
};

export default Label;
