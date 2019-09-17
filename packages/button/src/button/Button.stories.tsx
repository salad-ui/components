import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from '.';

storiesOf('Button', module)
  .add('variant', () => (
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
  ))
  .add('size', () => (
    <>
      <Button variant="tertiary" size="lg" onClick={action('Save Draft')}>
        Save Draft
      </Button>{' '}
      <Button variant="secondary" size="lg" onClick={action('Preview')}>
        Preview
      </Button>{' '}
      <Button variant="primary" size="lg" onClick={action('Publish')}>
        Publish
      </Button>
      <br />
      <br />
      <Button variant="tertiary" size="md" onClick={action('Save Draft')}>
        Save Draft
      </Button>{' '}
      <Button variant="secondary" size="md" onClick={action('Preview')}>
        Preview
      </Button>{' '}
      <Button variant="primary" size="md" onClick={action('Publish')}>
        Publish
      </Button>
      <br />
      <br />
      <Button variant="tertiary" size="sm" onClick={action('Save Draft')}>
        Save Draft
      </Button>{' '}
      <Button variant="secondary" size="sm" onClick={action('Preview')}>
        Preview
      </Button>{' '}
      <Button variant="primary" size="sm" onClick={action('Publish')}>
        Publish
      </Button>
    </>
  ))
  .add('isDisabled', () => (
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
  ))
  .add('isBusy', () => (
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
  ))
  .add('before/after', () => (
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
  ));
