React component example:

```js
<Button>Push Me for Real</Button>
```

### Here is a button with different things

```jsx
<div>
    <Button focus>focus Button</Button>
    <Button appearance="primary">Primary Button</Button>
    <Button appearance="secondary">Secondary Button</Button>
</div>
```

```jsx
<div>
    <Button ghost>Default Button</Button>
    <Button ghost appearance="primary">Primary Button</Button>
    <Button ghost appearance="secondary">Secondary Button</Button>
</div>
```

```jsx
<div>
    <Button disabled>Primary Button</Button>
    <Button appearance="primary" disabled>Primary Button</Button>
    <Button appearance="secondary" disabled>Secondary Button</Button>
</div>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
