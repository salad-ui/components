import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from '.';

storiesOf('Button', module)
  .add('isDefault', () => (
    <Button isPrimary onClick={action('clicked')}>
      Buy now!
    </Button>
  ))
  .add('isPrimary', () => (
    <Button isPrimary onClick={action('clicked')}>
      Buy now!
    </Button>
  ));
