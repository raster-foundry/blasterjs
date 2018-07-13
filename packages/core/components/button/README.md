React component example:

```js
<Button>Push Me for Real</Button>
```

### Here is a button with different things

```jsx
const { Intent } = require('../../../core');
<div>
    <Button intent={Intent.PRIMARY}>Primary Button</Button>

    <Button intent={Intent.PRIMARY} ghost>Primary Button</Button>
</div>
```

```jsx
const { Intent } = require('../../../core');
<Button intent={Intent.SECONDARY}>Secondary Button</Button>
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
