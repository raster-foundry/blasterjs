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

export const buildTheme = (base, components) => {
  let baseTheme = { ...base };

  for (var component in components) {
    const componentTheme = components[component];
    replaceThemeRefs(componentTheme, baseTheme);
    baseTheme[component] = componentTheme;
  }
  console.log("Base theme after building", baseTheme);
  return baseTheme;
};

const replaceThemeRefs = (o, theme) => {
  const keys = Object.keys(o);
  keys
    .filter(k => k !== "styles" && k !== "__filemeta")
    .forEach(k => {
      if (theme[k]) {
        Object.keys(o[k]).forEach(ck => {
          o[k][ck] = theme[k][o[k][ck]] || o[k][ck];
        });
      } else {
        replaceThemeRefs(o[k], theme);
      }
    });
};
