import * as React from 'react';
import {Button} from '@salad-ui/button';
import {TriggerWrapper} from './Trigger.styles';

export interface Trigger {
  onTrigger: () => void;
}

export const Trigger: React.FC<Trigger> = ({onTrigger}) => (
  <TriggerWrapper>
    <Button variant="tertiary" onClick={onTrigger}>
      <span role="img" aria-label="Switch themes">
        🎨
      </span>
    </Button>
  </TriggerWrapper>
);
