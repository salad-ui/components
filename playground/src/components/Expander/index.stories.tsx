import * as React from 'react';
import {useToggle} from '../useToggle';
import {Expander, ExpanderProps} from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Expander',
};

interface ExampleProps extends Omit<ExpanderProps, 'isExpanded'> {
  isExpandedInitially?: boolean;
  children?: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({
  isExpandedInitially = true,
  children,
  ...otherProps
}) => {
  const [on, toggle] = useToggle(isExpandedInitially);
  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <Expander isExpanded={on} {...otherProps}>
        {children ? children : (
          <>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum urna vel elit finibus, non ornare nisi lacinia. Donec quis felis in velit sagittis egestas. Quisque volutpat vel urna ac cursus. Morbi vel mi quis turpis tincidunt tincidunt eleifend sed ligula. Vestibulum quis odio iaculis, mollis neque nec, pellentesque metus. Praesent gravida sed metus vitae iaculis. Vestibulum rhoncus varius turpis id elementum. Nunc eget massa orci. Mauris at nisi at turpis molestie luctus at vitae mauris. Nullam vel commodo elit. Curabitur vitae orci ornare, egestas sapien in, placerat urna. Ut porttitor laoreet erat, sed posuere neque placerat quis.</p>
            <p>Cras scelerisque pharetra velit vitae condimentum. Phasellus et dui elementum leo condimentum dapibus at quis arcu. Quisque sit amet risus a lacus sollicitudin facilisis. Integer porta maximus felis, vel dapibus ex maximus eu. Etiam ut lectus in nisi sagittis gravida. Nulla facilisi. Aenean fringilla, tellus nec sagittis rhoncus, quam sapien tincidunt nunc, maximus sollicitudin tortor purus id mi. Curabitur ultricies malesuada sapien quis sollicitudin. Nunc gravida semper aliquam. Nullam auctor in est ac dictum. Curabitur imperdiet sed quam vitae rutrum. Suspendisse non pellentesque velit. In ultrices ut arcu in molestie. Praesent consectetur pharetra magna, quis commodo velit bibendum eu.</p>
          </>
        )}
      </Expander>
    </>
  );
}

export const StartExpanded = () => <Example isExpandedInitially={true}/>;
export const StartCollapsed = () => <Example isExpandedInitially={false}/>;

export const Horizontal = () => <Example isHorizontal={true}/>;

export const FocusOnExpand = () => <Example isExpandedInitially={false} focusOn="expand"/>;
export const FocusOnExpanded = () => <Example isExpandedInitially={false} focusOn="expanded"/>;

export const Events = () => (
  <Example 
    onExpand={action('Expand')}
    onExpanded={action('Expanded')}
    onCollapse={action('Collapse')}
    onCollapsed={action('Collapsed')}
  />
);

export const TabOrder = () => {
  return (
    <>
      Focus shouldn't move through the collapsed area when collapsed.
      <br/>
      <input/>
      <Example>
        <input/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum urna vel elit finibus, non ornare nisi lacinia. Donec quis felis in velit sagittis egestas. Quisque volutpat vel urna ac cursus. Morbi vel mi quis turpis tincidunt tincidunt eleifend sed ligula. Vestibulum quis odio iaculis, mollis neque nec, pellentesque metus. Praesent gravida sed metus vitae iaculis. Vestibulum rhoncus varius turpis id elementum. Nunc eget massa orci. Mauris at nisi at turpis molestie luctus at vitae mauris. Nullam vel commodo elit. Curabitur vitae orci ornare, egestas sapien in, placerat urna. Ut porttitor laoreet erat, sed posuere neque placerat quis.</p>
        <textarea/>
        <p>Cras scelerisque pharetra velit vitae condimentum. Phasellus et dui elementum leo condimentum dapibus at quis arcu. Quisque sit amet risus a lacus sollicitudin facilisis. Integer porta maximus felis, vel dapibus ex maximus eu. Etiam ut lectus in nisi sagittis gravida. Nulla facilisi. Aenean fringilla, tellus nec sagittis rhoncus, quam sapien tincidunt nunc, maximus sollicitudin tortor purus id mi. Curabitur ultricies malesuada sapien quis sollicitudin. Nunc gravida semper aliquam. Nullam auctor in est ac dictum. Curabitur imperdiet sed quam vitae rutrum. Suspendisse non pellentesque velit. In ultrices ut arcu in molestie. Praesent consectetur pharetra magna, quis commodo velit bibendum eu.</p>
        <input/>
      </Example>
      <textarea/>
    </>
  );
};
