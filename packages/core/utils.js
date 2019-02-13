import React from "react";

export const extractComponentFromChildren = (_children, componentName) => {
  let component;
  const children = React.Children.map(_children, child => {
    if (child.type && child.type.name === componentName) {
      component = child;
      return null;
    } else {
      return child;
    }
  });
  return [children, component];
};
