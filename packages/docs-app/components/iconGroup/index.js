import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import { Icon } from "@blasterjs/core";

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 20rem));
  grid-row-gap: 6.4rem;
  margin: 4rem auto;
`;

const GridItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-contents: space-between;
  align-items: center;
  padding: 1.6rem 0;
  cursor: pointer;

  :hover {
    background-color: #eee;
  }
`;

const IconName = styled.input`
  appearance: none;
  margin-top: 2.4rem;
  border: 0;
  padding: 0;
  background: none;
  text-align: center;
  cursor: inherit;

  :focus {
    outline: 0;
  }
`;

const IconGroup = ({theme, ...props}) => {
  const themeContext = useContext(ThemeContext);
  const icons = Object.keys(themeContext.icons).map(k => (
    <GridItem key={k} onClick={e => e.currentTarget.getElementsByTagName('input')[0].select()}>
      <Icon name={k} size="4rem" />
      <IconName value={k} readOnly />
    </GridItem>
  ));

  return (
    <Grid>
      {icons}
    </Grid>
  );
};

export default IconGroup;
