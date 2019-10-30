# Expander

## Usage

```jsx
import React from 'react';
import {Expander} from '@salad-ui/utils';

const Example = () => {
  const [isExpanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded(isExpanded => !isExpanded);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <Expander isExpanded={isExpanded}>This is the hidden content!</Expander>
    </>
  );
};
```
