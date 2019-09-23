import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '.';

export default {
    title: 'Button',
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

export const size = () => (
  <>
    <Button variant="tertiary" size="large" onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" size="large" onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" size="large" onClick={action('Publish')}>
      Publish
    </Button>
    <br />
    <br />
    <Button variant="tertiary" size="medium" onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" size="medium" onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" size="medium" onClick={action('Publish')}>
      Publish
    </Button>
    <br />
    <br />
    <Button variant="tertiary" size="small" onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" size="small" onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" size="small" onClick={action('Publish')}>
      Publish
    </Button>
  </>
);

export const isDisabled = () => (
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

export const isBusy = () => (
  <>
    <Button variant="tertiary" isBusy onClick={action('Save Draft')}>
      Save Draft
    </Button>{' '}
    <Button variant="secondary" isBusy onClick={action('Preview')}>
      Preview
    </Button>{' '}
    <Button variant="primary" isBusy onClick={action('Publish')}>
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
