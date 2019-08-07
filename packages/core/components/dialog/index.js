import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from 'styled-components'
import { themeGet } from 'styled-system';
import { rgba } from "polished";
import { COMMON, BORDER, MISC } from "../../constants";
import ReactModal from 'react-modal';

const CLASSES = {
  PORTAL: 'modal-dialog',
  OVERLAY: {
    base: 'modal-dialog__overlay',
    afterOpen: 'modal-dialog__overlay--after-open',
    beforeClose: 'modal-dialog__overlay--before-close'
  },
  DIALOG: {
    base: 'modal-dialog__content',
    afterOpen: 'modal-dialog__content--after-open',
    beforeClose: 'modal-dialog__content--before-close'
  },
  BODY: 'body--modal-dialog-open',
  HTML: 'html--modal-dialog-open'
};

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
  zIndex: _zIndex,
  contentLabel,
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

  const closeTimeoutMS = _closeTimeoutMS || theme.dialog.durations.closeTimeoutMS || 150;
  const overlayColor = _overlayColor || theme.dialog.colors.overlay || "#000";
  const overlayOpacity = _overlayOpacity || theme.dialog.opacities.overlay || 0.5;
  const zIndex = _zIndex || theme.dialog.zIndices.zIndex || 1000000;

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
    zIndex: zIndex
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
    .${CLASSES.BODY} {
      overflow: hidden;
    }

    /******************
     * Overlay
     */
    .${CLASSES.OVERLAY.base} {
      transition-duration: ${closeTimeoutMS}ms;
      transition-function: ease-in-out;
      ${theme.dialog.transitions.overlay.base}
    }

    .${CLASSES.OVERLAY.afterOpen} {
      ${theme.dialog.transitions.overlay.afterOpen}
    }

    .${CLASSES.OVERLAY.beforeClose} {
      ${theme.dialog.transitions.overlay.beforeClose}
    }

    /******************
     * Dialog
     */
    .${CLASSES.DIALOG.base} {
      transition-duration: ${closeTimeoutMS}ms;
      transition-function: ease-in-out;
      ${theme.dialog.transitions.dialog.base}
    }

    .${CLASSES.DIALOG.afterOpen} {
      ${theme.dialog.transitions.dialog.afterOpen}
    }

    .${CLASSES.DIALOG.beforeClose} {
      ${theme.dialog.transitions.dialog.beforeClose}
    }

    /******************
     * Focus Ring
     */
    .${CLASSES.DIALOG.base}:focus {
      outline-color: ${theme.dialog.colors.focus || "#bbb"};
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
        portalClassName={CLASSES.PORTAL}
        overlayClassName={CLASSES.OVERLAY}
        className={CLASSES.DIALOG}
        bodyOpenClassName={CLASSES.BODY}
        htmlOpenClassName={CLASSES.HTML}
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
  overlayOpacity: PropTypes.number,
  zIndex: PropTypes.number
};

export default Dialog;
