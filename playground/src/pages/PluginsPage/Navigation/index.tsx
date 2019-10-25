import * as React from 'react';
import {marginRight} from '@salad-ui/spacing';
import {SelectInput} from '@salad-ui/select-input';
import {TextInput} from '@salad-ui/text-input';
import {Wrapper, TabsWrapper, Tab, SearchWrapper} from './index.styles';

export const Navigation = () => (
  <Wrapper>
    <TabsWrapper>
      <Tab>Tabs</Tab>
    </TabsWrapper>
    <SearchWrapper>
      <SelectInput isCompact css={marginRight(1)}>
        <SelectInput.Option>Keyword</SelectInput.Option>
      </SelectInput>
      <TextInput isCompact placeholder="Search plugins" />
    </SearchWrapper>
  </Wrapper>
);
