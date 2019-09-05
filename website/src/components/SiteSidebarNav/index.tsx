import * as React from 'react';
import styled from 'styled-components';

export const SiteSidebarNav: React.FC = () => {
  return <Sidebar />;
};

const Sidebar = styled.div`
  flex: 0 0 auto;
  width: calc((100% - 1448px) / 2 + 298px);
  display: flex;
  z-index: 15;
  min-width: 298px;
  background: #f5f7f9;
  align-items: stretch;
  border-right: 1px solid #e6ecf1;
  padding-left: calc((100% - 1448px) / 2);
  flex-direction: column;
`;

export default SiteSidebarNav;
