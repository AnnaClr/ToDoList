import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/index';
import { ResetStyled } from './styles/reset';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    <ResetStyled />
  </ThemeProvider>
);
