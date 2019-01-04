import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import {color, opacity, boxShadow, borders, borderColor, borderRadius, themeGet} from 'styled-system';
import ReactModal from 'react-modal';
import Box from '../../../core/components/box';

let isAppElementSet = false;

const StyledDialog = styled(Box)`
  ${color}
  ${boxShadow}
  ${borders}
  ${borderColor}
  ${borderRadius}
  flex: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
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
  opacity,
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS,
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

  if (!isAppElementSet && appElementId) {
    ReactModal.setAppElement(`#${appElementId}`);
    isAppElementSet = true;
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(0, 0, 0, ${themeGet(`opacity.${opacity}`, opacity)(props)})`,
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
  ...Box.propTypes,
  ...color.propTypes,
  ...opacity.propTypes,
  ...boxShadow.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  appElementId: PropTypes.string
};

Dialog.defaultProps = {
  closeTimeoutMS: 150,
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
  bodyOpenClassName: 'body--modal-dialog-open',
  opacity: 0.6,
  boxShadow: 5,
  minWidth: '30rem',
  maxWidth: '80%',
  minHeight: '40rem',
  maxHeight: '90%',
  pt: 3,
  pb: 3,
  pl: 3,
  pr: 3,
  bg: 'white'
};

export default Dialog;
