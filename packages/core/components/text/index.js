import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styledSystem from "styled-system";

const Text = styled.p`
    ${styledSystem.display}
    ${styledSystem.space}
    ${styledSystem.width}
    ${styledSystem.maxWidth}
    ${styledSystem.minWidth}
    ${styledSystem.height}
    ${styledSystem.maxHeight}
    ${styledSystem.minHeight}
    ${styledSystem.ratio}
    ${styledSystem.verticalAlign}
    ${styledSystem.overflow}
    ${styledSystem.position}
    ${styledSystem.zIndex}
    ${styledSystem.top}
    ${styledSystem.right}
    ${styledSystem.bottom}
    ${styledSystem.left}
    ${styledSystem.fontFamily}
    ${styledSystem.fontSize}
    ${styledSystem.fontWeight}
    ${styledSystem.textAlign}
    ${styledSystem.lineHeight}
    ${styledSystem.letterSpacing}
    ${styledSystem.color}
`;

Text.propTypes = {
  ...styledSystem.display.propTypes,
  ...styledSystem.space.propTypes,
  ...styledSystem.width.propTypes,
  ...styledSystem.maxWidth.propTypes,
  ...styledSystem.minWidth.propTypes,
  ...styledSystem.height.propTypes,
  ...styledSystem.maxHeight.propTypes,
  ...styledSystem.minHeight.propTypes,
  ...styledSystem.ratio.propTypes,
  ...styledSystem.verticalAlign.propTypes,
  ...styledSystem.overflow.propTypes,
  ...styledSystem.position.propTypes,
  ...styledSystem.zIndex.propTypes,
  ...styledSystem.top.propTypes,
  ...styledSystem.right.propTypes,
  ...styledSystem.bottom.propTypes,
  ...styledSystem.left.propTypes,
  ...styledSystem.fontFamily.propTypes,
  ...styledSystem.fontSize.propTypes,
  ...styledSystem.fontWeight.propTypes,
  ...styledSystem.textAlign.propTypes,
  ...styledSystem.lineHeight.propTypes,
  ...styledSystem.letterSpacing.propTypes,
  ...styledSystem.color.propTypes
};

export default Text;
