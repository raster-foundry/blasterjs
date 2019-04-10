import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styledSystem from "styled-system";

const StyledBox = styled.div`
  ${styledSystem.display}
  ${styledSystem.space}
  ${styledSystem.width}
  ${styledSystem.maxWidth}
  ${styledSystem.minWidth}
  ${styledSystem.height}
  ${styledSystem.maxHeight}
  ${styledSystem.minHeight}
  ${styledSystem.verticalAlign}
  ${styledSystem.alignItems}
  ${styledSystem.justifyContent}
  ${styledSystem.flexWrap}
  ${styledSystem.flexDirection}
  ${styledSystem.flex}
  ${styledSystem.alignContent}
  ${styledSystem.justifyItems}
  ${styledSystem.justifySelf}
  ${styledSystem.alignSelf}
  ${styledSystem.order}
  ${styledSystem.flexBasis}
  ${styledSystem.gridGap}
  ${styledSystem.gridRowGap}
  ${styledSystem.gridColumnGap}
  ${styledSystem.gridColumn}
  ${styledSystem.gridRow}
  ${styledSystem.gridArea}
  ${styledSystem.gridAutoFlow}
  ${styledSystem.gridAutoRows}
  ${styledSystem.gridAutoColumns}
  ${styledSystem.gridTemplateRows}
  ${styledSystem.gridTemplateColumns}
  ${styledSystem.gridTemplateAreas}
  ${styledSystem.overflow}
  ${styledSystem.position}
  ${styledSystem.zIndex}
  ${styledSystem.top}
  ${styledSystem.right}
  ${styledSystem.bottom}
  ${styledSystem.left}
  ${styledSystem.color}
  ${styledSystem.background}
  ${styledSystem.borders}
  ${styledSystem.boxShadow}
  ${styledSystem.opacity}
`;

const Box = ({ tag, ...props }) => <StyledBox as={tag} {...props} />;

Box.propTypes = {
  tag: PropTypes.string,
  ...styledSystem.display.propTypes,
  ...styledSystem.space.propTypes,
  ...styledSystem.width.propTypes,
  ...styledSystem.maxWidth.propTypes,
  ...styledSystem.minWidth.propTypes,
  ...styledSystem.height.propTypes,
  ...styledSystem.maxHeight.propTypes,
  ...styledSystem.minHeight.propTypes,
  ...styledSystem.verticalAlign.propTypes,
  ...styledSystem.alignItems.propTypes,
  ...styledSystem.justifyContent.propTypes,
  ...styledSystem.flexWrap.propTypes,
  ...styledSystem.flexDirection.propTypes,
  ...styledSystem.flex.propTypes,
  ...styledSystem.alignContent.propTypes,
  ...styledSystem.justifyItems.propTypes,
  ...styledSystem.justifySelf.propTypes,
  ...styledSystem.alignSelf.propTypes,
  ...styledSystem.order.propTypes,
  ...styledSystem.flexBasis.propTypes,
  ...styledSystem.gridGap.propTypes,
  ...styledSystem.gridRowGap.propTypes,
  ...styledSystem.gridColumnGap.propTypes,
  ...styledSystem.gridColumn.propTypes,
  ...styledSystem.gridRow.propTypes,
  ...styledSystem.gridArea.propTypes,
  ...styledSystem.gridAutoFlow.propTypes,
  ...styledSystem.gridAutoRows.propTypes,
  ...styledSystem.gridAutoColumns.propTypes,
  ...styledSystem.gridTemplateRows.propTypes,
  ...styledSystem.gridTemplateColumns.propTypes,
  ...styledSystem.gridTemplateAreas.propTypes,
  ...styledSystem.overflow.propTypes,
  ...styledSystem.position.propTypes,
  ...styledSystem.zIndex.propTypes,
  ...styledSystem.top.propTypes,
  ...styledSystem.right.propTypes,
  ...styledSystem.bottom.propTypes,
  ...styledSystem.left.propTypes,
  ...styledSystem.color.propTypes,
  ...styledSystem.background.propTypes,
  ...styledSystem.borders.propTypes,
  ...styledSystem.boxShadow.propTypes,
  ...styledSystem.opacity.propTypes
};

Box.defaultProps = {
  tag: undefined
};

export default Box;
