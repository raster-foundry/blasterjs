import React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import { getContrast, tint, mix, darken } from "polished";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import Box from "../box";
import Icon from "../icon";
import Heading from "../heading";
import { STYLED } from "../../constants";

const INTENTS = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
  DEFAULT: "default"
};

const StyledCallout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  padding-top: ${tg("callout.space.pt")};
  padding-right: ${tg("callout.space.pr")};
  padding-left: ${tg("callout.space.pl")};
  padding-bottom: ${tg("callout.space.pb")};
  border: ${tg("callout.borders.border")};
  border-color: ${tg("callout.colors.borderColor")};
  border-radius: ${tg("callout.radii.borderRadius")};
  box-shadow: ${tg("callout.shadows.boxShadow")};

  ${props => calloutAppearance(props)}

  ${props =>
    props.icon &&
    css`
      padding-left: 0;
    `};

  ${tg("callout.overrides")}
  ${STYLED}
`;

function calloutAppearance(props) {
  const { intent } = props;

  let color, fg, bg, contrast, darkenBy;
  color = tg(
    `callout.intents.colors.${intent}`,
    `callout.intents.colors.default`
  )(props);

  bg = tint(0.9, color);
  contrast = getContrast(color, bg);
  darkenBy = (4.6 - contrast) / (4.6 + contrast);
  fg = getContrast(color, bg) <= "4.5" ? mix(darkenBy, "#000", color) : color;

  return css`
    background-color: ${bg};
    color: ${fg};
  `;
}

const getIconName = (icon, intent) => {
  if (icon === null || icon === false || icon === "") {
    return undefined;
  }

  if (icon !== undefined) {
    return icon;
  }

  switch (intent) {
    case INTENTS.SUCCESS:
      return "check";
    case INTENTS.WARNING:
    case INTENTS.DANGER:
      return "warning";
    case INTENTS.DEFAULT:
    default:
      return undefined;
  }
};

const Callout = ({ icon, iconSize, intent, title, children, ...props }) => {
  const iconName = getIconName(icon, intent);

  return (
    <StyledCallout {...props} intent={intent} icon={!!iconName}>
      {iconName && (
        <Icon
          name={iconName}
          size={iconSize}
          flex="none"
          my={0}
          mx={2}
          aria-hidden="true"
        />
      )}
      <Box flex="auto">
        {title && (
          <Heading as="h4" color="inherit" mb={1} lineHeight="small">
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </StyledCallout>
  );
};

Callout.propTypes = {
  ...propTypes.STYLED,
  intent: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.string,
  title: PropTypes.string
};

Callout.defaultProps = {
  intent: INTENTS.DEFAULT,
  iconSize: "2.4rem"
};

export default Callout;
