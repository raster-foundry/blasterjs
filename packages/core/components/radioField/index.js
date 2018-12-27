import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";
import Text from "../text";
import Field from "../field";
import Radio from "../radio";
import { Direction } from "../../common/direction";

const StyledRadioField = styled(Box)``;

const Name = styled(Text).attrs({
  tag: 'h6'
})`
  max-width: 100%;
  display: block;
  margin-bottom: ${themeGet('space.1')};
  color: ${themeGet('colors.textBase')};
  font-size: ${themeGet('fontSizes.3')};
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
  color: ${themeGet('colors.red')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const RadioField = ({
  name,
  inputName,
  options,
  required,
  value,
  desc,
  alert,
  ...props
}) => {
  return (
    <StyledRadioField {...props}>
      <Name>
        {name}
        {required && <Required title="This field is required.">*</Required>}
      </Name>
      {desc && <Desc mt={1}>{desc}</Desc>}
      {options.map(item => (
        <Field
          key={item.value}
          direction={Direction.HORIZONTAL}
          reverse
          name={item.label}
          mb={2}
          disabled={item.disabled}
          fontWeight="normal"
          fontSize={2}
          lineHeight={1}
        >
          <Radio
            name={inputName}
            value={item.value}
            checked={value && value === item.value}
            disabled={item.disabled}
            required={required}
            {...props}
          />
        </Field>
      ))}
      {alert && <Alert mt={2}>{alert}</Alert>}
    </StyledRadioField>
  );
}

RadioField.propTypes = {
  ...Box.proptTypes,
  name: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  desc: PropTypes.string,
  alert: PropTypes.string
};

RadioField.defaultProps = {
  name: undefined,
  inputName: undefined,
  options: [],
  required: false,
  value: undefined,
  desc: undefined,
  alert: undefined
}

export default RadioField;
