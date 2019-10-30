import * as React from 'react';
import {AppBar} from '~components/AppBar';
import {Logo} from '~components/Logo';
import {Avatar} from '~components/Avatar';

export const Header = () => (
  <AppBar
    logo={<Logo variant="simplified" size="small" color="onPrimary" />}
    right={
      <Avatar
        alt="jameslnewell"
        src="https://s.gravatar.com/avatar/6c5bc9c8df6e19392363c8dc59154c21?s=48"
        size="small"
      />
    }
  />
);
