import React from "react";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM, PROPTYPES } from "../../constants";

const FileInput = styled.input`
  height: auto;
  padding: ${tg("fileInput.space.p")};
  border: ${tg("fileInput.borders.border")};
  border-radius: ${tg("fileInput.radii.borderRadius")};
  background-color: ${tg("fileInput.colors.bg")};
  color: ${tg("fileInput.colors.color")};

  ${tg("fileInput.overrides")}
  ${compose(
    COMMON,
    BORDER,
    LAYOUT,
    FLEX_ITEM
  )}
`;

FileInput.propTypes = {
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.FLEX_ITEM
};

FileInput.defaultProps = {
  type: "file",
  onChange: () => {}
};

export default FileInput;
