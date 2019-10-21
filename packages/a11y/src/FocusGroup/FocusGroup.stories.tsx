import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {FocusGroup} from '.';

export default {
  title: 'a11y/FocusGroup',
};

export const Horizontal = () => (
  <>
    <FocusGroup orientation="horizontal">
      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('One')}>
            One
          </button>
        )}
      </FocusGroup.Item>

      <FocusGroup.Item disabled>
        {props => (
          <button {...props} onClick={action('Two')}>
            Two
          </button>
        )}
      </FocusGroup.Item>

      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Three')}>
            Three
          </button>
        )}
      </FocusGroup.Item>

      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Four')}>
            Four
          </button>
        )}
      </FocusGroup.Item>

      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Five')}>
            Five
          </button>
        )}
      </FocusGroup.Item>
    </FocusGroup>
  </>
);

export const Vertical = () => (
  <>
    <FocusGroup orientation="vertical">
      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('One')}>
            One
          </button>
        )}
      </FocusGroup.Item>
      <br />
      <FocusGroup.Item disabled>
        {props => (
          <button {...props} onClick={action('Two')}>
            Two
          </button>
        )}
      </FocusGroup.Item>
      <br />
      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Three')}>
            Three
          </button>
        )}
      </FocusGroup.Item>
      <br />
      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Four')}>
            Four
          </button>
        )}
      </FocusGroup.Item>
      <br />
      <FocusGroup.Item>
        {props => (
          <button {...props} onClick={action('Five')}>
            Five
          </button>
        )}
      </FocusGroup.Item>
    </FocusGroup>
  </>
);
