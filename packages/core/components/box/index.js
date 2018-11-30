import React from "react";
import styled from "styled-components";
import * as styledSystem from "styled-system"

const StyledBox = styled.div`
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
`;

const Box = props => <StyledBox {...props} />;

Box.propTypes = {
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
  ...styledSystem.left.propTypes
};

export default Box;
