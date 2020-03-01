import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Footer } from './footer';
import { GitHubRibbon } from './github-ribbon';

const theme = {
  color: {
    primary: '#203354',
    success: '#147d3b',
    info: '#8ba9c6',
    warning: '#fcaa67',
    danger: '#b7524f',
  },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GitHubRibbon />

      {children}

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
