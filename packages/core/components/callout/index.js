import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space, themeGet } from "styled-system";
import Icon from "../icon";
import Header from "../header";
import { Intent } from "../../common/intent";

const StyledCallout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-contents: flex-start;
  padding: ${themeGet('space.3', '2.4rem')};
  background-color: ${props => themeGet(`colors.${props.bg}`)};
  ${space}

  ${props => props.icon && css`
    padding-left: 0;
  `};
`;

const CalloutIcon = styled(Icon)`
  flex: none;
  margin: 0 ${themeGet('space.2', '1.6rem')};
  font-size: ${props => props.size || themeGet('fontSizes.4', '2.2rem')};
`;

const CalloutContent = styled.div`
  flex: auto;
`;

const CalloutTitle = styled(Header.h4)`
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

const Callout = props => {
  const { icon, iconSize, intent, title, children, ...otherProps } = props;
  const iconName = getIconName(icon, intent);
  const { color, bg } = getIntentColors(intent);

  return (
    <StyledCallout {...otherProps} bg={bg} icon={!!iconName}>
      {iconName && <CalloutIcon name={iconName} color={color} size={iconSize} />}
      <CalloutContent>
        {title && <CalloutTitle color={color}>{title}</CalloutTitle>}
        {children}
      </CalloutContent>
    </StyledCallout>
  );
};

Callout.propTypes = {
  ...space.PropTypes,
  intent: PropTypes.oneOf(Object.values(Intent)),
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.string,
  title: PropTypes.string
};

Callout.defaultProps = {
  intent: Intent.NONE,
  icon: undefined,
  iconSize: undefined,
  title: undefined
};

export default Callout;
