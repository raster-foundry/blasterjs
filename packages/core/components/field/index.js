import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Label from "../label";
import Box from "../box";
import Text from "../text";
import { Direction } from "../../common/direction";

const StyledField = styled(Label)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: ${props => props.disabled ? 'not-allowed' : 'initial'};
`;

const Name = styled(Text)`
  max-width: 100%;
  color: ${props => props.disabled ? themeGet('colors.grayLight1') : themeGet('colors.textBase')};
  font-size: ${props => props.fontSize || themeGet('fontSizes.3')};
  font-weight: ${props => props.fontWeight || 600};
  line-height: 1.2;
`;

const Required = styled.span`
  margin-left: calc(${themeGet('space.1')} / 2);
`;

const Desc = styled(Text)`
  color: ${themeGet('colors.slate')};
  font-size: ${themeGet('fontSizes.1')};
  line-height: 1.2;
`;

const Alert = styled(Text)`
  color: ${themeGet('colors.red')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
`;

const Field = ({
  required,
  direction,
  reverse,
  name,
  nameWidth,
  desc,
  alert,
  fontSize,
  fontWeight,
  disabled,
  children,
  ...props
}) => {
  switch (direction) {
    case Direction.HORIZONTAL:
      return (
        <StyledField flexDirection="row" disabled={disabled} {...props}>
          {reverse && children}
          <Box width={nameWidth} ml={reverse ? 2 : 0} mr={reverse ? 0 : 2}>
            <Name
              minHeight={reverse ? 0 : "4rem"}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              disabled={disabled}
              fontSize={fontSize}
              fontWeight={fontWeight}
            >
              {name}
              {required && <Required title="This field is required.">*</Required>}
            </Name>
            {desc && <Desc mt={1}>{desc}</Desc>}
            {alert && <Alert mt={1}>{alert}</Alert>}
          </Box>
          {!reverse && children}
        </StyledField>
      );
    case Direction.VERTICAL:
    default:
      return (
        <StyledField flexDirection="column" {...props}>
          <Name
            width={nameWidth}
            mb={2}
            disabled={disabled}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {name}
            {required && <Required title="This field is required.">*</Required>}
          </Name>
          {desc && <Desc mt={-1} mb={2}>{desc}</Desc>}
          {children}
          {alert && <Alert mt={2}>{alert}</Alert>}
        </StyledField>
      );
  }
};

Field.propTypes = {
  ...Label.propTypes,
  name: PropTypes.string.isRequired,
  nameWidth: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(Object.values(Direction)),
  reverse: PropTypes.bool,
  desc: PropTypes.string,
  alert: PropTypes.string
}

Field.defaultProps = {
  nameWidth: undefined,
  required: false,
  disabled: false,
  direction: undefined,
  reverse: false,
  desc: undefined,
  alert: undefined
};

export default Field;