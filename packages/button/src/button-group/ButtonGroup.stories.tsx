import React from 'react';
import {action} from '@storybook/addon-actions';
import {ButtonGroup} from '.';

export default {
    title: 'ButtonGroup',
};

export const variant = () => (
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
);

export const size = () => (
  <>
    <ButtonGroup size="large">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
        Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
        Publish
        </ButtonGroup.Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup size="medium">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
        Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
        Publish
        </ButtonGroup.Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup size="small">
        <ButtonGroup.Button variant="secondary" onClick={action('Preview')}>
        Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" onClick={action('Publish')}>
        Publish
        </ButtonGroup.Button>
    </ButtonGroup>
  </>
);

export const isDisabled = () => (
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
);

export const isBusy = () => (
  <>
    <ButtonGroup>
        <ButtonGroup.Button
            variant="secondary"
            isBusy
            onClick={action('Preview')}
        >
        Preview
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" isBusy onClick={action('Publish')}>
        Publish
        </ButtonGroup.Button>
    </ButtonGroup>
  </>
);

export const beforeAfter = () => (
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
);

beforeAfter.story = {
    name: 'before/after',
};
