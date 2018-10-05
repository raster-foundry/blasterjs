import React, { Fragment } from "react";
import styled from "styled-components";
import t from "prop-types";

const kinds = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502"
};

const AlertStyled = styled("div")`
  padding: 15px 20px;
  background: white;
  border-radius: 3px;
  color: ${props => props.theme.colors.white};
  background: ${({ kind = "info" }) => kinds[kind]};

  /* 
   * propType: appearance="secondary"
   */
  ${props =>
    props.sup === "sup" &&
    css`
      background: black;
    `};
`;

export const Alert = props => <AlertStyled {...props} />;

Alert.propTypes = {
  kind: t.oneOf(["info", "positive", "negative", "warning"]),
  sup: t.oneOf(["sup", "cool"])
};

Alert.defaultProps = {
  kind: "info"
};
