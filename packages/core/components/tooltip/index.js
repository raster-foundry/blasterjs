import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, BORDER, TYPOGRAPHY, MISC, PROPTYPES } from "../../constants";

import TooltipJS from "tooltip.js";

const TooltipContent = styled.span`
  position: relative;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  text-align: center;

  padding-top: ${tg("tooltip.space.py")};
  padding-right: ${tg("tooltip.space.px")};
  padding-bottom: ${tg("tooltip.space.py")};
  padding-left: ${tg("tooltip.space.px")};
  border-radius: ${tg("tooltip.radii.borderRadius")};
  background-color: ${tg("tooltip.colors.bg")};
  color: ${tg("tooltip.colors.color")};
  font-size: ${tg("tooltip.fontSizes.fontSize")};
  box-shadow: ${tg("tooltip.shadows.boxShadow")};

  ${tg("tooltip.overrides")}
  ${compose(
    COMMON,
    BORDER,
    TYPOGRAPHY,
    MISC
  )}

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: ${props =>
      props.bg ? tg(`colors.${props.bg}`, props.bg) : tg("tooltip.colors.bg")};
  }

  .tooltip[x-placement^="top"] & {
    bottom: 2px;
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .tooltip[x-placement^="bottom"] & {
    top: 2px;
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .tooltip[x-placement^="right"] & {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent;
      border-top-color: transparent;
      border-bottom-color: transparent;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  .tooltip[x-placement^="left"] & {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    const reference = this.tooltipRef.current.closest("[data-tooltip]");
    if (!reference) return;

    this.tooltip = new TooltipJS(reference, {
      ...this.props.options,
      title: this.tooltipRef.current,
      placement: this.props.placement,
      trigger: this.props.show !== undefined ? "manual" : this.props.trigger,
      delay: this.props.delay,
      closeOnClickOutside: this.props.closeOnClickOutside,
      boundariesElement: this.props.boundariesElement,
      offset: `${this.props.xOffset}, ${this.props.yOffset}`,
      html: true,
      template:
        '<span class="tooltip" role="tooltip" style="z-index:9999"><span class="tooltip-inner"></span></span>',
      popperOptions: {
        ...this.props.popperOptions,
        onCreate: () => {
          this.setState({ hidden: false });
        }
      }
    });
    this.tooltip.show().hide(); // Hack to ensure correct position

    if (this.props.show) {
      setTimeout(() => {
        this.tooltip.show();
      }, 100); // Hack to ensure correct position
    }
  }

  componentDidUpdate(prevProps) {
    if (this.tooltip && prevProps.show !== this.props.show) {
      this.props.show ? this.tooltip.show() : this.tooltip.hide();
    }
  }

  componentWillUnmount() {
    this.tooltip && this.tooltip.dispose();
  }

  render() {
    const {
      show,
      hasArrow,
      trigger,
      delay,
      closeOnClickOutside,
      boundariesElement,
      xOffset,
      yOffset,
      options,
      children,
      ...props
    } = this.props;

    const { hidden } = this.state;

    return (
      <TooltipContent hidden={hidden} ref={this.tooltipRef} {...props}>
        {children}
        <span hidden={!hasArrow} className="tooltip-arrow" />
      </TooltipContent>
    );
  }
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  hasArrow: PropTypes.bool,
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end"
  ]),
  trigger: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number.isRequired,
      hide: PropTypes.number.isRequired
    })
  ]),
  closeOnClickOutside: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  xOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.object,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.TYPOGRAPHY,
  ...PROPTYPES.MISC
};

Tooltip.defaultProps = {
  show: undefined,
  hasArrow: false,
  placement: "top",
  trigger: "hover focus",
  delay: 0,
  closeOnClickOutside: false,
  boundariesElement: "scrollParent",
  xOffset: 0,
  yOffset: 0,
  options: undefined
};

export default Tooltip;
