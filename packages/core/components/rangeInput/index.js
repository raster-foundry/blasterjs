import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { system, compose } from "styled-system";
import { COMMON, POSITION, FLEX_ITEM, PROPTYPES } from "../../constants";

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: ${props =>
    props.width
      ? tg(`sizes.${props.width}`, props.width)
      : tg("rangeInput.sizes.track.width")};
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
        ? tg(`borderWidths.${props.trackBorderWidth}`, props.trackBorderWidth)
        : tg("rangeInput.borderWidths.track");

      if (trackBorderWidth(props) === 0 || trackBorderWidth(props) === "0") {
        trackBorderWidth = "0px";
      }

      const trackHeight = props.trackHeight
        ? tg(`sizes.${props.trackHeight}`, props.trackHeight)
        : tg("rangeInput.sizes.track.height");

      const thumbHeight = props.thumbHeight
        ? tg(`sizes.${props.thumbHeight}`, props.thumbHeight)
        : tg("rangeInput.sizes.thumb.height");

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
        ? tg(`sizes.${props.thumbHeight}`, props.thumbHeight)
        : tg("rangeInput.sizes.thumb.height");
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
        ? tg(`sizes.${props.trackHeight}`, props.trackHeight)
        : tg("rangeInput.sizes.track.height");
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

  ${tg("rangeInput.overrides")};
  ${compose(
    COMMON,
    POSITION,
    FLEX_ITEM
  )}
`;

function trackStyleBase(props) {
  return css`
    width: ${props =>
      props.width
        ? tg(`sizes.${props.width}`, props.width)
        : tg("rangeInput.sizes.track.width")};
    height: ${props =>
      props.trackHeight
        ? tg(`sizes.${props.trackHeight}`, props.trackHeight)
        : tg("rangeInput.sizes.track.height")};
    cursor: pointer;
  `;
}

function trackStyleVisual(props) {
  return css`
    border-style: solid;
    background: ${props =>
      props.trackColor
        ? tg(`colors.${props.trackColor}`, props.trackColor)
        : tg("rangeInput.colors.track")};
    border-radius: ${props =>
      props.trackBorderRadius
        ? tg(`radii.${props.trackBorderRadius}`, props.trackBorderRadius)
        : tg("rangeInput.radii.track")};
    border-width: ${props =>
      props.trackBorderWidth
        ? tg(`borderWidths.${props.trackBorderWidth}`, props.trackBorderWidth)
        : tg("rangeInput.borderWidths.track")};
    border-color: ${props =>
      props.trackBorderColor
        ? tg(`colors.${props.trackBorderColor}`, props.trackBorderColor)
        : tg("rangeInput.colors.trackBorder")};
    box-shadow: ${props =>
      props.trackShadow
        ? tg(`shadows.${props.trackShadow}`, props.trackShadow)
        : tg("rangeInput.shadows.track")};
  `;
}

function trackStyleFocus(props) {
  return css`
    background: ${props =>
      props.trackFocusColor
        ? tg(`colors.${props.trackFocusColor}`, props.trackFocusColor)
        : tg("rangeInput.colors.trackFocus")};
  `;
}

function thumbStyle(props) {
  return css`
    box-sizing: border-box;
    border-style: solid;
    cursor: pointer;
    width: ${props =>
      props.thumbWidth
        ? tg(`sizes.${props.thumbWidth}`, props.thumbWidth)
        : tg("rangeInput.sizes.thumb.width")};
    height: ${props =>
      props.thumbHeight
        ? tg(`sizes.${props.thumbHeight}`, props.thumbHeight)
        : tg("rangeInput.sizes.thumb.height")};
    background: ${props =>
      props.thumbColor
        ? tg(`colors.${props.thumbColor}`, props.thumbColor)
        : tg("rangeInput.colors.thumb")};
    border-radius: ${props =>
      props.thumbBorderRadius
        ? tg(`radii.${props.thumbBorderRadius}`, props.thumbBorderRadius)
        : tg("rangeInput.radii.thumb")};
    border-width: ${props =>
      props.thumbBorderWidth
        ? tg(`borderWidths.${props.thumbBorderWidth}`, props.thumbBorderWidth)
        : tg("rangeInput.borderWidths.thumb")};
    border-color: ${props =>
      props.thumbBorderColor
        ? tg(`colors.${props.thumbBorderColor}`, props.thumbBorderColor)
        : tg("rangeInput.colors.thumbBorder")};
    box-shadow: ${props =>
      props.thumbShadow
        ? tg(`shadows.${props.thumbShadow}`, props.thumbShadow)
        : tg("rangeInput.shadows.thumb")};
  `;
}

const RangeInput = props => {
  return <StyledRangeInput {...props} type="range" />;
};

RangeInput.propTypes = {
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
  trackFocusColor: PropTypes.string,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.POSITION,
  ...PROPTYPES.FLEX_ITEM
};

export default RangeInput;
