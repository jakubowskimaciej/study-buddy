import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';

import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyles />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
