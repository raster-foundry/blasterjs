import * as base from "./base";
import * as components from "./components";
import icons from "./icons";

// Copy `base` and `icons` to `theme`
export const theme = { ...base, icons };

// Resolve references to base theme throughout component themes
// eg, `link.space.mx: 2` -> `link.space.mx: '1.6rem'`
// eg, `link.colors.hoverColor: 'primary'` -> `link.colors.hoverColor: '#738FFC'`
for (var component in components) {
  const componentTheme = components[component];
  for (var themeCategory in componentTheme) {
    if (themeCategory === "icons") continue;
    // lest we want to resolve icon names with their SVG strings

    const categoryDetails = componentTheme[themeCategory];
    for (var key in categoryDetails) {
      const value = categoryDetails[key];
      const resolvedValue = base[themeCategory][value];
      if (resolvedValue !== undefined && resolvedValue !== null) {
        categoryDetails[key] = resolvedValue;
      } else {
        categoryDetails[key] = value;
      }
    }

    // Attach component theme category objects to base theme category objects
    // eg, `theme.space.link = { mx: '1.6rem', my: '0.8rem', ... }`
    // eg, `theme.colors.link = { hoverColor: '#738FFC', ... }`
    // So namespaced styled-system defaultProps just work
    // eg, `Link.defaultProps = { mr: 'link.mx', ml: 'link.mx', ... }`
    theme[themeCategory][component] = categoryDetails;
  }
}
