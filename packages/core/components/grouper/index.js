import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";

const StyledGrouper = styled.div`
  ${space}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;

  > * {
    border-radius: 0;
  }

  > :first-child {
      border-radius: 10px 0 0 10px;
  }

  > :last-child {
      border-radius: 0 10px 10px 0;
  }
`;

const Grouper = props => {
  return (
    <Grouper {...props}>
      {props.children}
    </Grouper>
  );
};

Grouper.propTypes = {
  ...space.PropTypes,
  // borderRadius: PropTypes.oneOf(Object.values())
};

export default Grouper;
