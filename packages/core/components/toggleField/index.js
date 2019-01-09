import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";
import Text from "../text";
import Label from "../label";
import Field from "../field";
import Radio from "../radio";
import Checkbox from "../checkbox";
import { Direction } from "../../common/direction";
import { Size } from "../../common/size";
import { Intent } from "../../common/intent";

const StyledToggleField = styled(Box)``;

const Options = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction === Direction.HORIZONTAL ? 'row' : 'column'};
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: ${props => props.direction === Direction.HORIZONTAL ? 'center' : 'flex-start'};
`;

const Name = styled(Label)`
  max-width: 100%;
  display: block;
  margin-bottom: ${themeGet('space.1')};
  color: ${themeGet('colors.textBase')};
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
`;

const Required = styled.span`
  margin-left: calc(${themeGet('space.1')} / 2);
`;

const Desc = styled(Text)`
  margin-bottom: ${themeGet('space.2')};
  color: ${themeGet('colors.slate')};
  font-size: ${themeGet('fontSizes.1')};
  line-height: 1.2;
`;

const Alert = styled(Text)`
  font-size: ${themeGet('fontSizes.1')};
  font-weight: 600;
  line-height: 1;
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

const ToggleField = ({
  name,
  type,
  inputName,
  options,
  required,
  invalid,
  direction,
  desc,
  alert,
  alertIntent,
  onChange,
  checkedIcon,
  uncheckedIcon,
  checkedColor,
  uncheckedColor,
  size,
  inputSize,
  ...props
}) => {

  let Toggle;
  switch (type) {
    case 'checkbox':
      Toggle = Checkbox;
      break;
    case 'radio':
    default:
      Toggle = Radio;
      break;
  }

  return (
    <StyledToggleField {...props}>
      <Name tag="h6" size={size}>
        {name}
        {required && <Required title="This field is required.">*</Required>}
      </Name>
      {desc && <Desc mt={1}>{desc}</Desc>}
      <Options direction={direction}>
        {options.map(item => (
          <Field
            key={item.value}
            direction={Direction.HORIZONTAL}
            reverse
            name={item.label}
            mb={direction === Direction.VERTICAL ? 2 : 0}
            mr={direction === Direction.HORIZONTAL ? 3 : 0}
            disabled={item.disabled}
            fontWeight="normal"
            size={inputSize}
            lineHeight={1}
          >
            <Toggle
              id={item.id}
              name={item.inputName || inputName}
              value={item.value}
              checked={item.checked}
              disabled={item.disabled}
              required={required}
              invalid={invalid}
              checkedIcon={checkedIcon}
              uncheckedIcon={uncheckedIcon}
              checkedColor={checkedColor}
              uncheckedColor={uncheckedColor}
              size={inputSize}
              onChange={onChange}
            />
          </Field>
        ))}
      </Options>
      {alert && <Alert intent={alertIntent} mt={2}>{alert}</Alert>}
    </StyledToggleField>
  );
}

ToggleField.propTypes = {
  ...Box.propTypes,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  inputName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      inputName: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  required: PropTypes.bool,
  direction: PropTypes.oneOf(Object.values(Direction)),
  size: PropTypes.oneOf(Object.values(Size)),
  inputSize: PropTypes.oneOf(Object.values(Size)),
  desc: PropTypes.string,
  alert: PropTypes.string,
  alertIntent: PropTypes.oneOf(Object.values(Intent)),
  onChange: PropTypes.func,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  size: PropTypes.string
};

ToggleField.defaultProps = {
  name: undefined,
  type: undefined,
  inputName: undefined,
  options: [],
  required: false,
  invalid: false,
  direction: Direction.VERTICAL,
  size: Size.LARGE,
  inputSize: Size.MEDIUM,
  desc: undefined,
  alert: undefined,
  alertIntent: Intent.DANGER,
  onChange: () => {},
  checkedIcon: undefined,
  uncheckedIcon: undefined,
  checkedColor: undefined,
  uncheckedColor: undefined
}

export default ToggleField;
