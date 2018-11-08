import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, space, themeGet } from "styled-system";
import { Direction } from "../../common/direction";

const grayLight1 = "#C3CADF";

const HDivider = styled.hr`
  ${space}
  ${color}
  background-color: ${props => themeGet(`colors.${props.color}`, grayLight1)};
  border: 0;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "1px"};
`;

const VDivider = styled.span`
  ${space}
  ${color}
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => themeGet(`colors.${props.color}`, grayLight1)};
  width: ${props => props.width || "2px"};
  height: ${props => props.height || "100%"};

  ::after {
    content: '\00a0';
    visibility: hidden;
    pointer-events: none;
    user-select: none;
  }
`;

const Divider = props => {
  return (
    <>
      {props.direction === Direction.HORIZONTAL && <HDivider {...props} />}
      {props.direction === Direction.VERTICAL && <VDivider {...props} />}
    </>
  );
};

Divider.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
  direction: PropTypes.oneOf(Object.values(Direction)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Divider.defaultProps = {
  ml: "auto",
  mr: "auto",
  mt: "auto",
  mb: "auto"
};

export default Divider;
