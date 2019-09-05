import * as React from 'react';
import styled from 'styled-components';

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

  const {props} = docgenInfo;
  return (
    <>
      <h3>Props</h3>
      <Wrapper>
        <HelpText>* is required</HelpText>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th style={{width: '50%'}}>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props)
              .filter(name => props[name].name !== 'key')
              .map(name => {
                const prop = props[name];
                return (
                  <tr key={name}>
                    <td>
                      <Code>
                        {prop.name}
                        {prop.required ? '*️' : ''}
                      </Code>
                    </td>
                    <td>
                      <Type>{prop.type.name}</Type>
                    </td>
                    <td>{prop.defaultValue}</td>
                    <td>{prop.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 1em 0;
`;

const HelpText = styled.div`
  padding: 10px 0;
  font-size: 0.8em;
  opacity: 0.5;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: none;
  margin: 0 -12px;

  th,
  td {
    text-align: left;
    font-size: 0.9em;
  }

  th,
  td {
    padding: 4px 12px;
  }

  tr {
    &:hover {
      td {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

const Code = styled.code`
  background: none;
  font-family: monospace;
  padding: 0;
`;

const Type = styled(Code)`
  color: #932981;
`;

export default PropTable;
