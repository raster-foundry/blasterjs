import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from 'styled-components'
import { themeGet } from 'styled-system';
import { rgba } from "polished";
import { COMMON, BORDER, MISC } from "../../constants";
import ReactModal from 'react-modal';

let isAppElementSet = false;

const StyledDialog = styled.div`
  flex: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;

  min-width: ${themeGet("dialog.minWidths.minWidth")};
  max-width: ${themeGet("dialog.maxWidths.maxWidth")};
  min-height: ${themeGet("dialog.minHeights.minHeight")};
  max-height: ${themeGet("dialog.maxHeights.maxHeight")};
  padding: ${themeGet("dialog.space.p")};
  background-color: ${themeGet("dialog.colors.bg")};
  box-shadow: ${themeGet("dialog.shadows.boxShadow")};

  ${themeGet("dialog.styles")}
  ${COMMON}
  ${BORDER}
  ${MISC}
`;

const Dialog = ({
  appElementId,
  children,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  overlayColor: _overlayColor,
  overlayOpacity: _overlayOpacity,
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS: _closeTimeoutMS,
  style: ignoredStyle,
  contentLabel,
  portalClassName,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  ariaHideApp,
  shouldFocusAfterRender,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  shouldReturnFocusAfterClose,
  role,
  parentSelector,
  aria,
  data,
  overlayRef,
  contentRef,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  if (!isAppElementSet && appElementId) {
    ReactModal.setAppElement(`#${appElementId}`);
    isAppElementSet = true;
  }

  const closeTimeoutMS = _closeTimeoutMS || theme.dialog.durations.closeTimeout || 150;
  const overlayColor = _overlayColor || theme.dialog.colors.overlay || "#000";
  const overlayOpacity = _overlayOpacity || theme.dialog.opacities.overlay || 0.5;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: rgba(overlayColor, overlayOpacity),
    zIndex: 1000000
  };

  const contentStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight
  };

  const transitionCSS = `
    /******************
     * Body
     */
    .${bodyOpenClassName} {
      overflow: hidden;
    }

    /******************
     * Overlay
     */
    .${overlayClassName.base} {
      opacity: 0;
      transition: opacity ${closeTimeoutMS}ms ease-in-out;
    }

    .${overlayClassName.afterOpen} {
      opacity: 1;
    }

    .${overlayClassName.beforeClose} {
      opacity: 0;
    }

    /******************
     * Dialog
     */
    .${className.base} {
      transform: translateY(200px);
      transition: transform ${closeTimeoutMS}ms ease-in-out;
    }

    .${className.base}:focus {
      outline-color: ${theme.dialog.colors.focus || "#bbb"};
    }

    .${className.afterOpen} {
      transform: translateY(0);
    }

    .${className.beforeClose} {
      transform: translateY(200px);
    }
  `;

  return (
    <>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{__html: transitionCSS}}
      />
      <ReactModal
        style={{overlay: overlayStyle, content: contentStyle}}
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        closeTimeoutMS={closeTimeoutMS}
        contentLabel={contentLabel}
        portalClassName={portalClassName}
        overlayClassName={overlayClassName}
        className={className}
        bodyOpenClassName={bodyOpenClassName}
        htmlOpenClassName={htmlOpenClassName}
        ariaHideApp={ariaHideApp}
        shouldFocusAfterRender={shouldFocusAfterRender}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
        role={role}
        parentSelector={parentSelector}
        aria={aria}
        data={data}
        overlayRef={overlayRef}
        contentRef={contentRef}
      >
        <StyledDialog {...props}>{children}</StyledDialog>
      </ReactModal>
    </>
  );
};

Dialog.setAppElement = element => ReactModal.setAppElement(element);

Dialog.propTypes = {
  ...ReactModal.propTypes,
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...MISC.propTypes,
  appElementId: PropTypes.string,
  closeTimeoutMS: PropTypes.number,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number
};

Dialog.defaultProps = {
  portalClassName: 'modal-dialog',
  overlayClassName: {
    base: 'modal-dialog__overlay',
    afterOpen: 'modal-dialog__overlay--after-open',
    beforeClose: 'modal-dialog__overlay--before-close'
  },
  className: {
    base: 'modal-dialog__content',
    afterOpen: 'modal-dialog__content--after-open',
    beforeClose: 'modal-dialog__content--before-close'
  },
  bodyOpenClassName: 'body--modal-dialog-open'
};

export default Dialog;
