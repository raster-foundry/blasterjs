import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { borders, themeGet } from "styled-system";
import { rgba } from "polished";
import Box from "../box";
import { Density } from "../../common/density";

const Table = styled(Box).attrs({
  tag: 'table'
})`
  ${borders}

  th {
    font-weight: bold;
  }

  &,
  th,
  td {
    border-style: solid;
    border-color: ${props => themeGet(`colors.${props.borderColor}`, props.borderColor)};
  }

  ${props => props.borderHeader && css`
    th {
      border-bottom-style: solid;
      border-bottom-color: ${props => themeGet(`colors.${props.borderColor}`, props.borderColor)};
      border-bottom-width: ${props => `${props.borderWidth}px`};
    }
  `}

  ${props => (props.bordered || props.borderOutside) && css`
    & {
      border-width: ${props => `${props.borderWidth}px`};
    }
  `}

  ${props => (props.bordered || props.borderInside || props.borderRows) && css`
    tr:not(:last-child) td {
      border-bottom-width: ${props => `${props.borderWidth}px`};
    }
  `}

  ${props => (props.bordered || props.borderInside || props.borderColumns) && css`
    th:not(:first-child),
    td:not(:first-child) {
      border-left-width: ${props => `${props.borderWidth}px`};
    }
  `}

  ${props => props.striped && css`
    tr:nth-child(odd) td {
      background-color: ${props => rgba(themeGet(`colors.${props.stripeColor}`, props.stripeColor)(props), 0.15)};
    }
  `}

  ${props => props.hoverable && css`
    tr:hover td,
    tr:active td {
      background-color: ${props => rgba(themeGet(`colors.${props.hoverColor}`, props.hoverColor)(props), 0.15)};
      cursor: ${props => props.hoverCursor};
    }
  `}

  ${props => props.density === Density.COMFORTABLE && css`
    th,
    td {
      padding: ${themeGet('space.2')};
    }
  `}

  ${props => props.density === Density.COMPACT && css`
    th,
    td {
      padding: ${themeGet('space.1')};
    }
  `}
`;

Table.propTypes = {
  ...Box.propTypes,
  ...borders.propTypes,
  borderHeader: PropTypes.bool,
  bordered: PropTypes.bool,
  borderInside: PropTypes.bool,
  borderRows: PropTypes.bool,
  borderColumns: PropTypes.bool,
  borderOutside: PropTypes.bool,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  striped: PropTypes.bool,
  stripeColor: PropTypes.string,
  hoverable: PropTypes.bool,
  hoverColor: PropTypes.string,
  hoverCursor: PropTypes.string,
  density: PropTypes.oneOf(Object.values(Density)).isRequired
};

Table.defaultProps = {
  borderHeader: true,
  bordered: false,
  borderInside: false,
  borderRows: false,
  borderColumns: false,
  borderOutside: false,
  borderColor: "table.borderColor",
  borderWidth: 1,
  striped: false,
  stripeColor: "table.stripeColor",
  hoverable: false,
  hoverColor: "table.hoverColor",
  hoverCursor: "default",
  density: Density.COMFORTABLE,
};

export default Table;
