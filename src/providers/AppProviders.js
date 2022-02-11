import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvier } from 'hooks/useAuth';

import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvier>
          <GlobalStyles />
          {children}
        </AuthProvier>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
