import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { STYLED } from "../../constants";

const Card = styled.div`
  position: relative;
  padding-top: ${themeGet("card.space.pt")};
  padding-right: ${themeGet("card.space.pr")};
  padding-left: ${themeGet("card.space.pl")};
  padding-bottom: ${themeGet("card.space.pb")};
  background-color: ${themeGet("card.colors.bg")};
  border: ${themeGet("card.borders.border")};
  border-color: ${themeGet("card.colors.borderColor")};
  border-radius: ${themeGet("card.radii.borderRadius")};
  box-shadow: ${themeGet("card.shadows.boxShadow")};

  ${themeGet("card.overrides")}
  ${STYLED}
`;

Card.propTypes = {
  ...STYLED.propTypes
};

export default Card;
