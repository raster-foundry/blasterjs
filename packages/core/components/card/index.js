import React from "react";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { STYLED } from "../../constants";

const Card = styled.div`
  position: relative;
  padding-top: ${tg("card.space.pt")};
  padding-right: ${tg("card.space.pr")};
  padding-left: ${tg("card.space.pl")};
  padding-bottom: ${tg("card.space.pb")};
  background-color: ${tg("card.colors.bg")};
  border: ${tg("card.borders.border")};
  border-color: ${tg("card.colors.borderColor")};
  border-radius: ${tg("card.radii.borderRadius")};
  box-shadow: ${tg("card.shadows.boxShadow")};

  ${tg("card.overrides")}
  ${STYLED}
`;

Card.propTypes = {
  ...STYLED.propTypes
};

export default Card;
