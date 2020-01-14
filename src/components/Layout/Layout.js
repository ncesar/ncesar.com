import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

const StyledLayoutWrapper = styled.section`
  display: flex;
`;
const StyledLayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <StyledLayoutMain>{children}</StyledLayoutMain>
      <MenuBar />
    </StyledLayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
