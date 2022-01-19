import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from 'utils/GlobalStyles';
import 'utils/fonts.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
