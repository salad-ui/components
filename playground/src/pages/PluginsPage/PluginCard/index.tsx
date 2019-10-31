import * as React from 'react';
import {Card} from '@salad-ui/card';
import {Title, Body, Caption} from '@salad-ui/typography';
import {Link} from '@salad-ui/link';
import {ButtonGroup} from '@salad-ui/button';
import {CheckCircleOutline, Star, Icon} from '@salad-ui/icon';
import {Unit, Grid} from '@salad-ui/grid';
import {Description} from './index.styles';

export interface PluginCardProps {
  title: React.ReactNode;
  author: {
    name: React.ReactNode;
    website: string;
  };
  thumbnail: string;
  description: React.ReactNode;
}

export const PluginCard: React.FC<PluginCardProps> = ({
  title,
  author,
  thumbnail,
  description,
}) => {
  return (
    <Card>
      <Grid marginBottom={1.5}>
        <Unit size="min">
          <Icon size="large" marginRight={2}>
            <img src={thumbnail} alt="" />
          </Icon>
        </Unit>
        <Unit size="max">
          <Title size="small" color="onSurface">
            {title}
          </Title>
          <Body isSmall>
            by{' '}
            <Link href={author.website} target="_blank" rel="nofollow">
              {author.name}
            </Link>
          </Body>
        </Unit>
      </Grid>
      <Description>{description}</Description>
      <Grid>
        <Unit size={1 / 3}>
          <Body isSmall color="onSurface" display="flex" alignItems="center">
            4.5 <Star size="small" aria-hidden={true} marginLeft={0.5} />
          </Body>
          <Caption>800 reviews</Caption>
        </Unit>
        <Unit size={1 / 3}>
          <Body isSmall color="onSurface">
            Last updated
          </Body>
          <Caption>2 weeks ago</Caption>
        </Unit>
        <Unit size={1 / 3}>
          <Body isSmall color="onSurface">
            Installs
          </Body>
          <Caption>1+ Million</Caption>
        </Unit>
      </Grid>
      <Body isSmall marginTop={1.5} display="flex" alignItems="center">
        <CheckCircleOutline size="small" color="success" marginRight={0.5} />
        Compatible with your version of WordPress
      </Body>
      <ButtonGroup isCompact marginTop={2}>
        <ButtonGroup.Button variant="secondary">Install</ButtonGroup.Button>
        <ButtonGroup.Button variant="tertiary">More details</ButtonGroup.Button>
      </ButtonGroup>
    </Card>
  );
};
