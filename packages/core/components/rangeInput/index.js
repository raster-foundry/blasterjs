import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, POSITION, FLEX_ITEM } from "../../constants";

// Styling logic from
//   https://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html
//   https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
//   https://github.com/darlanrod/input-range-scss/blob/master/_inputrange.scss

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: ${props => props.width
    ? themeGet(`widths.${props.width}`, props.width)
    : themeGet('rangeInput.widths.track')};
  background: transparent;

  &:focus {
    outline: none;
  }

  /* Webkit */

  &::-webkit-slider-runnable-track {
    box-sizing: border-box;
    ${props => trackStyleBase(props)}
    ${props => trackStyleVisual(props)}
  }

  &:focus::-webkit-slider-runnable-track {
    ${props => trackStyleFocus(props)}
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    margin-top: ${props => {
      let trackBorderWidth = props.trackBorderWidth
        ? themeGet(`borderWidths.${props.trackBorderWidth}`, props.trackBorderWidth)
        : themeGet('rangeInput.borderWidths.track');

      if (trackBorderWidth(props) === 0 || trackBorderWidth(props) === '0') {
        trackBorderWidth = '0px'; // hack to make css calc() work with 0 border-width
      }

      const trackHeight = props.trackHeight
        ? themeGet(`heights.${props.trackHeight}`, props.trackHeight)
        : themeGet('rangeInput.heights.track');

      const thumbHeight = props.thumbHeight
        ? themeGet(`heights.${props.thumbHeight}`, props.thumbHeight)
        : themeGet('rangeInput.heights.thumb');

      return css`calc(((-2 * ${trackBorderWidth} + ${trackHeight}) / 2) - (${thumbHeight} / 2))`;
    }};

    ${props => thumbStyle(props)}
  }

  /* Mozilla */

  &::-moz-range-track {
    box-sizing: border-box;
    ${props => trackStyleBase(props)}
    ${props => trackStyleVisual(props)}
  }

  &:focus::-moz-range-track {
    ${props => trackStyleFocus(props)}
  }

  &::-moz-range-thumb {
    ${props => thumbStyle(props)}
  }

  /* Microsoft */

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;

    border-width: ${props => {
      const thumbHeight = props.thumbHeight
        ? themeGet(`heights.${props.thumbHeight}`, props.thumbHeight)
        : themeGet('rangeInput.heights.thumb');
      return css`calc(${thumbHeight} / 2) 0`;
    }};

    ${props => trackStyleBase(props)}
  }

  &::-ms-fill-lower {
    ${props => trackStyleVisual(props)}
  }

  &::-ms-fill-upper {
    ${props => trackStyleVisual(props)}
  }

  &:focus::-ms-fill-lower {
    ${props => trackStyleFocus(props)}
  }

  &:focus::-ms-fill-upper {
    ${props => trackStyleFocus(props)}
  }

  &::-ms-thumb {
    ${props => thumbStyle(props)}

    margin-top: ${props => {
      const trackHeight = props.trackHeight
        ? themeGet(`heights.${props.trackHeight}`, props.trackHeight)
        : themeGet('rangeInput.heights.track');
      return css`calc(${trackHeight} / 4)`;
    }};
  }

  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }
  &:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
  &:disabled::-ms-thumb {
    cursor: not-allowed;
  }
  &:disabled::-webkit-slider-runnable-track {
    cursor: not-allowed;
  }
  &:disabled::-moz-range-track {
    cursor: not-allowed;
  }
  &:disabled::-ms-fill-lower {
    cursor: not-allowed;
  }
  &:disabled::-ms-fill-upper {
    cursor: not-allowed;
  }

  ${themeGet("rangeInput.styles")};
  ${COMMON}
  ${POSITION}
  ${FLEX_ITEM}
`;

function trackStyleBase(props) {
  return css`
    width: ${props => props.width
      ? themeGet(`widths.${props.width}`, props.width)
      : themeGet('rangeInput.widths.track')};
    height: ${props => props.trackHeight
      ? themeGet(`heights.${props.trackHeight}`, props.trackHeight)
      : themeGet('rangeInput.heights.track')};
    cursor: pointer;
    animate: 0.2s;
  `;
}

function trackStyleVisual(props) {
  return css`
    border-style: solid;
    background: ${props => props.trackColor
      ? themeGet(`colors.${props.trackColor}`, props.trackColor)
      : themeGet('rangeInput.colors.track')};
    border-radius: ${props => props.trackBorderRadius
      ? themeGet(`radii.${props.trackBorderRadius}`, props.trackBorderRadius)
      : themeGet('rangeInput.radii.track')};
    border-width: ${props => props.trackBorderWidth
      ? themeGet(`borderWidths.${props.trackBorderWidth}`, props.trackBorderWidth)
      : themeGet('rangeInput.borderWidths.track')};
    border-color: ${props => props.trackBorderColor
      ? themeGet(`colors.${props.trackBorderColor}`, props.trackBorderColor)
      : themeGet('rangeInput.colors.trackBorder')};
    box-shadow: ${props => props.trackShadow
      ? themeGet(`shadows.${props.trackShadow}`, props.trackShadow)
      : themeGet('rangeInput.shadows.track')};
  `;
}

function trackStyleFocus(props) {
  return css`
    background: ${props => props.trackFocusColor
      ? themeGet(`colors.${props.trackFocusColor}`, props.trackFocusColor)
      : themeGet('rangeInput.colors.trackFocus')};
  `;
}

function thumbStyle(props) {
  return css`
    box-sizing: border-box;
    border-style: solid;
    cursor: pointer;
    width: ${props => props.thumbWidth
      ? themeGet(`widths.${props.thumbWidth}`, props.thumbWidth)
      : themeGet('rangeInput.widths.thumb')};
    height: ${props => props.thumbHeight
      ? themeGet(`heights.${props.thumbHeight}`, props.thumbHeight)
      : themeGet('rangeInput.heights.thumb')};
    background: ${props => props.thumbColor
      ? themeGet(`colors.${props.thumbColor}`, props.thumbColor)
      : themeGet('rangeInput.colors.thumb')};
    border-radius: ${props => props.thumbBorderRadius
      ? themeGet(`radii.${props.thumbBorderRadius}`, props.thumbBorderRadius)
      : themeGet('rangeInput.radii.thumb')};
    border-width: ${props => props.thumbBorderWidth
      ? themeGet(`borderWidths.${props.thumbBorderWidth}`, props.thumbBorderWidth)
      : themeGet('rangeInput.borderWidths.thumb')};
    border-color: ${props => props.thumbBorderColor
      ? themeGet(`colors.${props.thumbBorderColor}`, props.thumbBorderColor)
      : themeGet('rangeInput.colors.thumbBorder')};
    box-shadow: ${props => props.thumbShadow
      ? themeGet(`shadows.${props.thumbShadow}`, props.thumbShadow)
      : themeGet('rangeInput.shadows.thumb')};
  `;
}

const RangeInput = props => {
  return (
    <StyledRangeInput {...props} type="range" />
  );
};

RangeInput.propTypes = {
  ...COMMON.propTypes,
  ...POSITION.propTypes,
  ...FLEX_ITEM.propTypes,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  width: PropTypes.string,
  thumbColor: PropTypes.string,
  thumbWidth: PropTypes.string,
  thumbHeight: PropTypes.string,
  thumbBorderRadius: PropTypes.string,
  thumbBorderColor: PropTypes.string,
  thumbBorderWidth: PropTypes.string,
  thumbShadow: PropTypes.string,
  trackColor: PropTypes.string,
  trackHeight: PropTypes.string,
  trackBorderRadius: PropTypes.string,
  trackBorderColor: PropTypes.string,
  trackBorderWidth: PropTypes.string,
  trackShadow: PropTypes.string,
  trackFocusColor: PropTypes.string
};

export default RangeInput;
