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
  return baseTheme;
};

export const replaceThemeRefs = (o, theme) => {
  const keys = Object.keys(o);
  keys
    .filter(k => k !== "styles" && k !== "__filemeta" && !Array.isArray(o[k]))
    // For every entry in this level of the theme
    .forEach(k => {
      // check if there is a matching key in the base theme
      if (theme[k]) {
        // if there is, for every key within that object, replace it with a match from the base theme if it exists there
        Object.keys(o[k]).forEach(ck => {
          o[k][ck] = theme[k][o[k][ck]] || o[k][ck];
        });
      } else {
        // if there isn't, go to the next level down and run this same function
        replaceThemeRefs(o[k], theme);
      }
    });
};
