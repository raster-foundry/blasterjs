import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { borders, themeGet } from "styled-system";
import { rgba } from "polished";
import { COMMON, BORDER, LAYOUT, TYPOGRAPHY } from "../../constants";

const Table = styled.table`
  th {
    font-weight: bold;
  }

  &,
  th,
  td {
    border-style: solid;
    ${props => props.borderColor
      ? css`border-color: ${themeGet(`colors.${props.borderColor}`, props.borderColor)};`
      : css`border-color: ${themeGet('table.colors.borderColor')};`
    }
  }

  ${props => props.borderHeader && css`
    th {
      border-bottom-style: solid;
      ${props => props.borderColor
        ? css`border-color: ${themeGet(`colors.${props.borderColor}`, props.borderColor)};`
        : css`border-color: ${themeGet('table.colors.borderColor')};`
      }
      ${props => props.borderWidth
        ? css`border-bottom-width: ${props.borderWidth}px};`
        : css`border-bottom-width: ${themeGet('table.borderWidths.borderWidth')}px;`
      }
    }
  `}

  ${props => (props.bordered || props.borderOutside) && css`
    & {
      ${props => props.borderWidth
        ? css`border-width: ${props.borderWidth}px};`
        : css`border-width: ${themeGet('table.borderWidths.borderWidth')}px;`
      }
    }
  `}

  ${props => (props.bordered || props.borderInside || props.borderRows) && css`
    tr:not(:last-child) td {
      ${props => props.borderWidth
        ? css`border-bottom-width: ${props.borderWidth}px};`
        : css`border-bottom-width: ${themeGet('table.borderWidths.borderWidth')}px;`
      }

    }
  `}

  ${props => (props.bordered || props.borderInside || props.borderColumns) && css`
    th:not(:first-child),
    td:not(:first-child) {
      ${props => props.borderWidth
        ? css`border-left-width: ${props.borderWidth}px};`
        : css`border-left-width: ${themeGet('table.borderWidths.borderWidth')}px;`
      }
    }
  `}

  ${props => props.striped && css`
    tr:nth-child(odd) td {
      ${props => props.stripeColor
        ? css`background-color: ${rgba(themeGet(`colors.${props.stripeColor}`, props.stripeColor)(props), 0.15)};`
        : css`background-color: ${rgba(themeGet('table.colors.stripeColor')(props), 0.15)};`
      }
    }
  `}

  ${props => props.hoverable && css`
    tr:hover td,
    tr:active td {
      ${props => props.hoverColor
        ? css`background-color: ${rgba(themeGet(`colors.${props.hoverColor}`, props.hoverColor)(props), 0.15)};`
        : css`background-color: ${rgba(themeGet('table.colors.hoverColor')(props), 0.15)};`
      }
      cursor: ${props => props.hoverCursor};
    }
  `}

  ${props => {
    const density = props.compact ? 'compact' : 'comfortable';
    return css`
      th,
      td {
        padding: ${themeGet(`table.space.${density}`)};
      }
    `
  }}

  ${themeGet("table.styles")}
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${TYPOGRAPHY}
`;

Table.propTypes = {
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...LAYOUT.propTypes,
  ...TYPOGRAPHY.propTypes,
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
  compact: PropTypes.bool
};

Table.defaultProps = {
  borderHeader: true,
  bordered: false,
  borderInside: false,
  borderRows: false,
  borderColumns: false,
  borderOutside: false,
  striped: false,
  hoverable: false,
  hoverCursor: "default",
  compact: false
};

export default Table;
