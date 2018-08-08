### Overview
The `Breadcrumbs` component is used to display a clickable path through the app
hierarchy to the current screen.

Currently the `path` gets passed in as an array of `{name, url}` objects representing
the nodes of the path. Use the `highlightCurrent` prop to highlight the last node.

Future versions should:
- Integrate with React Router.
- Accommodate images as optional node names (eg, app logo).

```jsx
const path = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Places",
    url: "/places/"
  },
  {
    name: "Nearby",
    url: "/places/nearby/"
  }
];

<Breadcrumbs path={path} highlightCurrent></Breadcrumbs>
```
