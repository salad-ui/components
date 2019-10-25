# Accordion

## Usage

```jsx
import React from 'react';
import {Accordion} from '@salad-ui/utils';

const Example = () => {
  const [expanded, setExpanded] = React.useState([]);

  const handleToggle = (rel: string) =>
    setExpanded(expanded => {
      if (expanded.includes(rel)) {
        return [];
      } else {
        return [rel];
      }
    });

  return (
    <>
      <Accordion expanded={expanded} onToggle={handleToggle}>
        <Accordion.Toggle rel={0}>
          This is toggle for the hidden content.
        </Accordion.Toggle>
        <Accordion.Content rel={0}>
          This is the hidden content!
        </Accordion.Content>
      </Accordion>
    </>
  );
};
```
