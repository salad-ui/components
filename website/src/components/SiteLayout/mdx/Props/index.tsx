/**
 * The Props component documents a component's props
 * @example <Props component={Button}/>
 */
import * as React from 'react';
import {DocGen} from './types';
import {formatType} from './formatType';
import {Body} from '@salad-ui/typography';
import {
  List,
  Prop,
  PropName,
  PropDetail,
  PropType,
  PropDefault,
  PropRequired,
  PropDescription,
} from './index.styles';

export interface Props {
  component: React.ComponentType;
}

export const Props: React.FC<Props> = ({component}) => {
  // `.__docgenInfo` is a property added by "react-docgen-typescript-loader"
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const docgenInfo: DocGen = (component as any).__docgenInfo;
  if (!docgenInfo || !Object.keys(docgenInfo.props).length) {
    return <Body isSmall>Component has no props!</Body>;
  }

  const {props} = docgenInfo;
  return (
    <>
      <List>
        {Object.keys(props)
          .filter(name => props[name].name !== 'key')
          .map(name => {
            const prop = props[name];
            return (
              <Prop key={name}>
                <PropName>.{prop.name}</PropName>
                <PropDetail>
                  <PropType>{formatType(prop.type)}</PropType>
                  {prop.defaultValue && (
                    <PropDefault>
                      {' '}
                      = {formatType(prop.defaultValue)}
                    </PropDefault>
                  )}
                  {prop.required && (
                    <>
                      {' '}
                      <PropRequired>required</PropRequired>
                    </>
                  )}
                </PropDetail>
                <PropDescription>{prop.description}</PropDescription>
              </Prop>
            );
          })}
      </List>
    </>
  );
};

export default Props;
