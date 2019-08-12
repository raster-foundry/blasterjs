import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import {
  COMMON,
  BACKGROUND,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX_CONTAINER,
  FLEX_ITEM
} from "../../constants";
import Button from "../button";
import Icon from "../icon";
import Text from "../text";

const StyledPagination = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-size: ${themeGet('pagination.fontSizes.fontSize')};

  ${themeGet("pagination.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${TYPOGRAPHY}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_CONTAINER}
  ${FLEX_ITEM}
`;

const Pagination = ({
  children,
  currentPage,
  pageCount,
  onPageChange,
  label,
  firstAndLast,
  ...props
}) => {
  return (
    <StyledPagination {...props}>
      {firstAndLast && <Button
        onClick={() => onPageChange(1)}
        appearance="minimal"
        fontSize="inherit"
        aria-label="First page"
        disabled={currentPage === 1}
        mr={1}
        px={1}
      >
        <Icon name="arrowToLeft" aria-hidden="true" />
      </Button>}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        appearance="minimal"
        fontSize="inherit"
        aria-label="Back one page"
        disabled={currentPage === 1}
        mr={2}
        px={1}
      >
        <Icon name="arrowLeft" aria-hidden="true" />
      </Button>
      <Text fontSize="inherit">
        {label} {currentPage} of {pageCount}
      </Text>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        appearance="minimal"
        fontSize="inherit"
        aria-label="Forward one page"
        disabled={currentPage === pageCount}
        ml={2}
        px={1}
      >
        <Icon name="arrowRight" aria-hidden="true" />
      </Button>
      {firstAndLast && <Button
        onClick={() => onPageChange(pageCount)}
        appearance="minimal"
        fontSize="inherit"
        aria-label="Last page"
        disabled={currentPage === pageCount}
        ml={1}
        px={1}
      >
        <Icon name="arrowToRight" aria-hidden="true" />
      </Button>}
    </StyledPagination>
  );
};

Pagination.propTypes = {
  ...COMMON.propTypes,
  ...BACKGROUND.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEX_CONTAINER.propTypes,
  ...FLEX_ITEM.propTypes,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  firstAndLast: PropTypes.bool
};

Pagination.defaultProps = {
  label: "Page",
  firstAndLast: true
};

export default Pagination;
