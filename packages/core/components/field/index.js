import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Label from "../label";
import Box from "../box";
import Text from "../text";
import { Direction } from "../../common/direction";
import { Size } from "../../common/size";
import { Intent } from "../../common/intent";

const StyledField = styled(Label)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: ${props => (props.disabled ? "not-allowed" : "initial")};
`;

const Name = styled(Label)`
  max-width: 100%;
  color: ${props =>
    props.disabled ? themeGet("colors.gray200") : themeGet("colors.textBase")};
  font-weight: ${props => props.fontWeight || 600};
  line-height: 1.2;
`;

const Required = styled.span`
  margin-left: calc(${themeGet("space.1")} / 2);
`;

const Desc = styled(Text)`
  color: ${themeGet("colors.slate")};
  font-size: ${themeGet("fontSizes.1")};
  line-height: 1.2;
`;

const Alert = styled(Text)`
  font-size: ${themeGet("fontSizes.1")};
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;

  ${props => {
    let color;
    switch (props.intent) {
      case Intent.NONE:
        color = "textBase";
        break;
      case Intent.SUCCESS:
        color = "green";
        break;
      case Intent.WARNING:
        color = "orange";
        break;
      case Intent.DANGER:
      default:
        color = "red";
        break;
    }
    return css`
      color: ${themeGet(`colors.${color}`)};
    `;
  }}
`;

const Field = ({
  required,
  direction,
  size,
  reverse,
  name,
  nameWidth,
  desc,
  alert,
  alertIntent,
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
              tag="span"
              minHeight={reverse ? 0 : "4rem"}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              disabled={disabled}
              fontSize={fontSize}
              fontWeight={fontWeight}
              size={size}
            >
              {name}
              {required && (
                <Required title="This field is required.">*</Required>
              )}
            </Name>
            {desc && (
              <Desc mt={size === Size.TINY || Size.SMALL ? 0 : 1}>{desc}</Desc>
            )}
            {alert && (
              <Alert intent={alertIntent} mt={1}>
                {alert}
              </Alert>
            )}
          </Box>
          {!reverse && children}
        </StyledField>
      );
    case Direction.VERTICAL:
    default:
      return (
        <StyledField flexDirection="column" {...props}>
          <Name
            tag="span"
            width={nameWidth}
            mb={size === Size.TINY || Size.SMALL ? 1 : 2}
            disabled={disabled}
            fontSize={fontSize}
            fontWeight={fontWeight}
            size={size}
          >
            {name}
            {required && <Required title="This field is required.">*</Required>}
          </Name>
          {desc && (
            <Desc
              mt={size === Size.TINY || Size.SMALL ? 0 : -1}
              mb={size === Size.TINY || Size.SMALL ? 1 : 2}
            >
              {desc}
            </Desc>
          )}
          {children}
          {alert && (
            <Alert intent={alertIntent} mt={2}>
              {alert}
            </Alert>
          )}
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
  size: PropTypes.oneOf(Object.values(Size)),
  reverse: PropTypes.bool,
  desc: PropTypes.string,
  alert: PropTypes.string,
  alertIntent: PropTypes.oneOf(Object.values(Intent))
};

Field.defaultProps = {
  nameWidth: undefined,
  required: false,
  disabled: false,
  direction: undefined,
  size: Size.MEDIUM,
  reverse: false,
  desc: undefined,
  alert: undefined,
  alertIntent: Intent.DANGER
};

export default Field;
