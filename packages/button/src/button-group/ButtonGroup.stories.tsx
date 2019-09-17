import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ButtonGroup} from '.';

storiesOf('ButtonGroup', module)
  .add('variant', () => (
    <>
      <ButtonGroup>
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
    </>
  ))
  .add('size', () => (
    <>
      <ButtonGroup size="lg">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="md">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="sm">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
    </>
  ))
  .add('isDisabled', () => (
    <>
      <ButtonGroup>
        <ButtonGroup.Button
          variant="secondary"
          isDisabled
          onClick={action('Preview')}
        >
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="primary"
          isDisabled
          onClick={action('Publish')}
        >
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
    </>
  ))
  .add('isBusy', () => (
    <>
      <ButtonGroup>
        <ButtonGroup.Button
          variant="secondary"
          isBusy
          onClick={action('Preview')}
        >
          Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="primary"
          isBusy
          onClick={action('Publish')}
        >
          Publish
        </ButtonGroup.Button>
      </ButtonGroup>
    </>
  ))
  .add('before/after', () => (
    <>
      <ButtonGroup>
        <ButtonGroup.Button
          variant="secondary"
          before="📦"
          onClick={action('Preview')}
        >
          Package
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="primary"
          before="📦"
          onClick={action('Publish')}
        >
          Package
        </ButtonGroup.Button>
      </ButtonGroup>
    </>
  ));
