import * as React from 'react';
import {Link} from 'react-router-dom';
import {
  Speed,
  Pencil,
  Image,
  Page,
  Comments,
  Palette,
  InputHdmi,
  Users,
  Wrench,
  Cog,
  ChevronLeft,
} from '@salad-ui/icon';
import {Drawer, DrawerMenu, DrawerMenuItemProps} from '@salad-ui/drawer';

/* eslint-disable @typescript-eslint/no-explicit-any */
// Link isn't very well typed for specifying a component
const RouterLink = Link as React.ComponentType<any>;
/* eslint-enable @typescript-eslint/no-explicit-any */

const DrawerRouterLink = (props: DrawerMenuItemProps & {to: string}) => (
  <RouterLink
    {...props}
    component={DrawerMenu.Item}
    role="link"
    variant="subitem"
  />
);

export const NavigationDrawer: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleToggle = (rel: string) =>
    setExpanded(expanded => {
      if (expanded.includes(rel)) {
        return [];
      } else {
        return [rel];
      }
    });

  const top = (
    <DrawerMenu expanded={expanded} onToggle={handleToggle}>
      <DrawerRouterLink
        to="/"
        before={<Speed aria-hidden={true} />}
        isActive={true}
      >
        Dashboard
      </DrawerRouterLink>
      <DrawerMenu.Group before={<Pencil aria-hidden={true} />} label="Posts">
        <DrawerRouterLink to="/posts">All Posts</DrawerRouterLink>
        <DrawerRouterLink to="/posts/write">Add new</DrawerRouterLink>
        <DrawerRouterLink to="/posts/categories">Categories</DrawerRouterLink>
        <DrawerRouterLink to="/posts/tags">Tags</DrawerRouterLink>
      </DrawerMenu.Group>
      <DrawerMenu.Group before={<Image aria-hidden={true} />} label="Media">
        <DrawerRouterLink to="/upload">Library</DrawerRouterLink>
        <DrawerRouterLink to="/media/new">Add new</DrawerRouterLink>
      </DrawerMenu.Group>
      <DrawerMenu.Group before={<Page aria-hidden={true} />} label="Pages" />
      <DrawerMenu.Group
        before={<Comments aria-hidden={true} />}
        label="Comments"
      />
      {/* <Divider /> */}
      <DrawerMenu.Group
        before={<Palette aria-hidden={true} />}
        label="Appearance"
      />
      <DrawerMenu.Group
        before={<InputHdmi aria-hidden={true} />}
        label="Plugins"
      >
        <DrawerRouterLink to="/plugins/featured">Add Plugins</DrawerRouterLink>
      </DrawerMenu.Group>
      <DrawerMenu.Group before={<Users aria-hidden={true} />} label="Users" />
      <DrawerMenu.Group before={<Wrench aria-hidden={true} />} label="Tools" />
      <DrawerMenu.Group before={<Cog aria-hidden={true} />} label="Settings" />
    </DrawerMenu>
  );

  const bottom = (
    <DrawerMenu>
      <DrawerMenu.Item
        before={<ChevronLeft />}
        onClick={() => console.log('Collapse!')}
      >
        Collapse menu
      </DrawerMenu.Item>
    </DrawerMenu>
  );

  return <Drawer top={top} bottom={bottom} />;
};
