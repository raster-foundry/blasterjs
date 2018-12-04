import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";
import Icon from "../icon";
import Header from "../header";
import { Intent } from "../../common/intent";

const StyledCallout = styled(Box)`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-contents: flex-start;
  background-color: ${props => themeGet(`colors.${props.bg}`)};

  ${props => props.icon && css`
    padding-left: 0;
  `};
`;

const CalloutIcon = styled(Icon)`
  flex: none;
  margin: 0 ${themeGet('space.2', '1.6rem')};
`;

const CalloutTitle = styled(Header).attrs({ as: "h4" })`
  margin-bottom: ${themeGet('space.1', '0.8rem')};
  line-height: 1;
`;

const getIconName = (icon, intent) => {
  if (icon === null || icon === false || icon === "") {
    return undefined;
  }

  if (icon !== undefined) {
    return icon;
  }

  switch (intent) {
    case Intent.SUCCESS:
      return "check";
    case Intent.WARNING:
    case Intent.DANGER:
      return "warning";
    case Intent.NONE:
    default:
      return undefined;
  }
}

const getIntentColors = intent => {
  let colors = {};

  switch (intent) {
    case Intent.SUCCESS:
      colors.color = "green";
      colors.bg = "greenTint";
      break;
    case Intent.WARNING:
      colors.color = "yellow";
      colors.bg = "yellowTint";
      break;
    case Intent.DANGER:
      colors.color = "red";
      colors.bg = "redTint";
      break;
    case Intent.NONE:
    default:
      colors.color = "textBase";
      colors.bg = "grayLightest";
      break;
  }

  return colors;
}

const Callout = ({ icon, iconSize, intent, title, children, ...props }) => {
  const iconName = getIconName(icon, intent);
  const { color, bg } = getIntentColors(intent);

  return (
    <StyledCallout {...props} bg={bg} icon={!!iconName}>
      {iconName && <CalloutIcon name={iconName} color={color} size={iconSize} />}
      <Box flex="auto">
        {title && <CalloutTitle color={color}>{title}</CalloutTitle>}
        {children}
      </Box>
    </StyledCallout>
  );
};

Callout.propTypes = {
  ...Box.PropTypes,
  intent: PropTypes.oneOf(Object.values(Intent)),
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.string,
  title: PropTypes.string
};

Callout.defaultProps = {
  intent: Intent.NONE,
  icon: undefined,
  iconSize: "2.2rem",
  title: undefined,
  pt: 3,
  pb: 3,
  pl: 3,
  pr: 3
};

export default Callout;
