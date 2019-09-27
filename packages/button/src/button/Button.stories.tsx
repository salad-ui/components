import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '.';

export default {
  title: 'components/Button',
};

export const variant = () => (
  <>
    <Button variant="tertiary" onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" onClick={action('Publish')}>
      Publish
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button variant="tertiary" isDisabled onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" isDisabled onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" isDisabled onClick={action('Publish')}>
      Publish
    </Button>
  </>
);

export const beforeAfter = () => (
  <>
    <Button variant="tertiary" before="❤" onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" before="🔍" onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" before="📦" onClick={action('Publish')}>
      Publish
    </Button>
  </>
);

beforeAfter.story = {
  name: 'before/after',
};
