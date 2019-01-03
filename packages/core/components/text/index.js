import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styledSystem from "styled-system";
import Box from "../box";

const Text = styled(Box)`
    ${styledSystem.fontFamily}
    ${styledSystem.fontSize}
    ${styledSystem.fontWeight}
    ${styledSystem.textAlign}
    ${styledSystem.lineHeight}
    ${styledSystem.letterSpacing}
    ${styledSystem.color}
`;

Text.propTypes = {
  ...Box.propTypes,
  ...styledSystem.fontFamily.propTypes,
  ...styledSystem.fontSize.propTypes,
  ...styledSystem.fontWeight.propTypes,
  ...styledSystem.textAlign.propTypes,
  ...styledSystem.lineHeight.propTypes,
  ...styledSystem.letterSpacing.propTypes,
  ...styledSystem.color.propTypes
};

Text.defaultProps = {
  tag: 'p',
  fontFamily: 'body',
  fontSize: 2
};

export default Text;
