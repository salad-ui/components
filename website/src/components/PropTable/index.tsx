import * as React from 'react';
import {DocGen} from './types';
import {formatType} from './formatType';
import {
    Props,
    Prop,
    PropName,
    PropDetail,
    PropType,
    PropDefault,
    PropRequired,
    PropDescription,
} from './index.style';

export interface PropTableProps {
    component: React.ComponentType;
}

export const PropTable: React.FC<PropTableProps> = ({component}) => {
    // `.__docgenInfo` is a property added by "react-docgen-typescript-loader"
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const docgenInfo: DocGen = (component as any).__docgenInfo;

    if (!docgenInfo || !Object.keys(docgenInfo.props).length) {
        return <>Component has no props!</>;
    }

    const {props} = docgenInfo;
    return (
    <>
      <h3>Props</h3>
      <Props>
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
      </Props>
    </>
    );
};

export default PropTable;
