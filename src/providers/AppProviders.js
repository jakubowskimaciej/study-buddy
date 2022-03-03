import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { Provider } from 'react-redux';
import { store } from 'store';

import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default AppProviders;
