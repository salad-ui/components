import * as React from 'react';
import { Link } from 'react-router-dom';
import {Speed, Pencil, Image, Page, Comments, Palette, InputHdmi, Users, Wrench, Cog, ChevronLeft } from '@salad-ui/icon';
import {PageTemplate} from '~components/PageTemplate';
import { AppBar } from '~components/AppBar';
import { Logo } from '~components/Logo';
import { Avatar } from '~components/Avatar';
import { Divider } from '~components/Divider';
import { Drawer, DrawerMenu, DrawerMenuItemProps } from '~components/Drawer';

const RouterDrawMenuLink = (props: DrawerMenuItemProps & {to: string}) => (
  // @ts-ignore
  <Link {...props} component={DrawerMenu.Item} role="link" variant="subitem"/>
);

export const SettingsPage = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleToggle = (rel: string) => setExpanded(expanded => {
    if (expanded.includes(rel)) {
      return [];
    } else {
      return [rel];
    }
  }); 

  return (
    <PageTemplate>
      {{
        header: (
          <AppBar 
            logo={<Logo variant="simplified" size="small" color="onPrimary"/>}
            right={<Avatar alt="jameslnewell" src="https://s.gravatar.com/avatar/6c5bc9c8df6e19392363c8dc59154c21?s=48" size="small"/>}
          />
        ),
        left: (
          <Drawer
            top={
              <DrawerMenu expanded={expanded} onToggle={handleToggle}>
                <RouterDrawMenuLink to="/" before={<Speed aria-hidden={true}/>} isActive={true}>Dashboard</RouterDrawMenuLink>
                <DrawerMenu.Group before={<Pencil aria-hidden={true}/>} label="Posts">
                  <RouterDrawMenuLink to="/posts">All Posts</RouterDrawMenuLink>
                  <RouterDrawMenuLink to="/posts/write">Add new</RouterDrawMenuLink>
                  <RouterDrawMenuLink to="/posts/categories">Categories</RouterDrawMenuLink>
                  <RouterDrawMenuLink to="/posts/tags" >Tags</RouterDrawMenuLink>
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Image aria-hidden={true}/>} label="Media">
                  <RouterDrawMenuLink to="/upload">Library</RouterDrawMenuLink>
                  <RouterDrawMenuLink to="/media/new">Add new</RouterDrawMenuLink>
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Page aria-hidden={true}/>} label="Pages">
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Comments aria-hidden={true}/>} label="Comments">
                </DrawerMenu.Group>
                <Divider/>
                <DrawerMenu.Group before={<Palette aria-hidden={true}/>} label="Appearance">
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<InputHdmi aria-hidden={true}/>} label="Plugins">
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Users aria-hidden={true}/>} label="Users">
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Wrench aria-hidden={true}/>} label="Tools">
                </DrawerMenu.Group>
                <DrawerMenu.Group before={<Cog aria-hidden={true}/>} label="Settings">
                </DrawerMenu.Group>
              </DrawerMenu>
            }
            bottom={
              <>
                <DrawerMenu.Item before={<ChevronLeft/>} onClick={() => console.log('Collapse!')}>Collapse menu</DrawerMenu.Item>
              </>
            }
          />
        ),
        content: (
          <>
            Content
          </>
        )
      }}
    </PageTemplate>
  );
};
