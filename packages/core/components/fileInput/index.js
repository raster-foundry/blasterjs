import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM } from "../../constants";

const FileInput = styled.input`
  height: auto;

  padding: ${themeGet("fileInput.space.p")};
  border: ${themeGet("fileInput.borders.border")};
  border-radius: ${themeGet("fileInput.radii.borderRadius")};
  background-color: ${themeGet("fileInput.colors.bg")};
  color: ${themeGet("fileInput.colors.color")};

  ${themeGet("fileInput.overrides")}
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${FLEX_ITEM}
`;

FileInput.propTypes = {
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...LAYOUT.propTypes,
  ...FLEX_ITEM.propTypes
};

FileInput.defaultProps = {
  type: "file",
  onChange: () => {}
};

export default FileInput;
