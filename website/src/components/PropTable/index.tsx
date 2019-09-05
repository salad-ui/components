import * as React from 'react';

interface DocGenInfo {
  displayName: string;
  description?: string;
  props: {
    [name: string]: {
      name: string;
      description?: string;
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      defaultValue?: any;
      required: boolean;
      type: {
        name: string;
      };
    };
  };
}

export interface PropTableProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  component: React.ComponentType<any>;
}

export const PropTable: React.FC<PropTableProps> = ({component}) => {
  // `.__docgenInfo` is a property added by "react-docgen-typescript-loader"
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const docgenInfo: DocGenInfo = (component as any).__docgenInfo;

  if (!docgenInfo) {
    return <>Component has no props!</>;
  }

  const {displayName, description, props} = docgenInfo;
  return (
    <>
      <h1>{displayName}</h1>
      <p>{description}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Required?</th>
            <th>Default value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map(name => {
            const prop = props[name];
            return (
              <tr key={name}>
                <td>{prop.name}</td>
                <td>{prop.description}</td>
                <td>{prop.type.name}</td>
                <td>{prop.required ? '✔️' : ''}</td>
                <td>{prop.defaultValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
