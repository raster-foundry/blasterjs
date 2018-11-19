import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, themeGet } from "styled-system";
import { Direction } from "../../common/direction";

const HDivider = styled.hr`
  ${space}
  background-color: ${props => themeGet(`colors.${props.color}`, themeGet('colors.grayLight1'))};
  border: 0;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "1px"};
`;

const VDivider = styled.span`
  ${space}
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => themeGet(`colors.${props.color}`, themeGet('colors.grayLight1'))};
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
  ...space.PropTypes,
  direction: PropTypes.oneOf(Object.values(Direction)).isRequired,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Divider;
