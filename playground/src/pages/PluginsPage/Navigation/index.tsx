import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {marginRight} from '@salad-ui/spacing';
import {SelectInput} from '@salad-ui/select-input';
import {TextInput} from '@salad-ui/text-input';
import {Button} from '@salad-ui/button';
import {Tabs, TabsTabProps} from '@salad-ui/tabs';
import {Wrapper, TabsWrapper, SearchWrapper} from './index.styles';

interface TabLinkProps extends TabsTabProps {
  navigate: () => void;
}
// FIXME: https://github.com/ReactTraining/react-router/issues/7013
const TabLink: React.FC<TabLinkProps> = ({
  href,
  navigate,
  children,
  ...otherProps
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate();
  };
  return (
    <Tabs.Tab role="link" href={href} onClick={handleClick} {...otherProps}>
      {children}
    </Tabs.Tab>
  );
};

export const Navigation = () => (
  <Wrapper>
    <TabsWrapper>
      <Tabs>
        {/* FIXME: https://github.com/ReactTraining/react-router/issues/7013 */}
        <NavLink
          to="/plugins/featured"
          activeClassName="is-active"
          component={TabLink}
        >
          Featured
        </NavLink>
        <NavLink
          to="/plugins/popular"
          activeClassName="is-active"
          component={TabLink}
        >
          Popular
        </NavLink>
        <NavLink
          to="/plugins/recommended"
          activeClassName="is-active"
          component={TabLink}
        >
          Recommended
        </NavLink>
        <NavLink
          to="/plugins/favorites"
          activeClassName="is-active"
          component={TabLink}
        >
          Favorites
        </NavLink>
      </Tabs>
    </TabsWrapper>
    <SearchWrapper>
      <SelectInput isCompact css={marginRight(1)}>
        <SelectInput.Option>Keyword</SelectInput.Option>
      </SelectInput>
      <TextInput isCompact placeholder="Search plugins" css={marginRight(1)} />
      <Button variant="secondary" isCompact>
        Search
      </Button>
    </SearchWrapper>
  </Wrapper>
);
