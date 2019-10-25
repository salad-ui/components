import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Drawer, DrawerMenu} from '..';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
`;

export default {
  title: 'components/drawer/DrawerMenu',
};

const href = 'https://www.example.com/';
const clickAction = action('Click');

export const Demo = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleToggle = (rel: string) =>
    setExpanded(expanded => {
      if (expanded.includes(rel)) {
        return [];
      } else {
        return [rel];
      }
    });

  return (
    <Wrapper>
      <Drawer
        top={
          <DrawerMenu expanded={expanded} onToggle={handleToggle}>
            <DrawerMenu.Item>Plain</DrawerMenu.Item>
            <DrawerMenu.Item href={href}>Anchor</DrawerMenu.Item>
            <DrawerMenu.Item onClick={clickAction}>Button</DrawerMenu.Item>
            <DrawerMenu.Group label="Group A">
              <DrawerMenu.Item>Nested Plain</DrawerMenu.Item>
              <DrawerMenu.Item href={href}>Nested Anchor</DrawerMenu.Item>
              <DrawerMenu.Item onClick={clickAction}>
                Nested Button
              </DrawerMenu.Item>
            </DrawerMenu.Group>
            <DrawerMenu.Group label="Group B">
              <DrawerMenu.Item>Nested Plain</DrawerMenu.Item>
              <DrawerMenu.Item href={href}>Nested Anchor</DrawerMenu.Item>
              <DrawerMenu.Item onClick={clickAction}>
                Nested Button
              </DrawerMenu.Item>
            </DrawerMenu.Group>
          </DrawerMenu>
        }
      />
    </Wrapper>
  );
};
