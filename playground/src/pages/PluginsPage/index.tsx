import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Box} from '@salad-ui/box';
import {PageTemplate} from '~components/PageTemplate';
import {Header} from './Header';
import {Navigation} from './Navigation';
import {PluginCard} from './PluginCard';
import {Grid} from './index.styles';

import faker from 'faker';
import {Schema} from 'faker-schema';

const schema = new Schema(() => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  author: {
    name: faker.company.companyName(),
    website: faker.internet.url(),
  },
  thumbnail: faker.image.technics(),
  description: faker.lorem.paragraph(),
}));

const Plugins = () => {
  const plugins = schema.make(4);
  return (
    <Grid>
      {plugins.map(plugin => (
        <PluginCard
          key={plugin.id}
          title={plugin.title}
          author={plugin.author}
          thumbnail={plugin.thumbnail}
          description={plugin.description}
        />
      ))}
    </Grid>
  );
};

const PluginsPage = () => {
  return (
    <PageTemplate
      content={
        <Box>
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/plugins/featured" component={Plugins} />
            <Route exact path="/plugins/popular" component={Plugins} />
            <Route exact path="/plugins/recommended" component={Plugins} />
            <Route exact path="/plugins/favorites" component={Plugins} />
          </Switch>
        </Box>
      }
    />
  );
};

export default PluginsPage;
