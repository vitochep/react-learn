import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider as StoreProvider } from 'components/Store';

// import { ThemeProvider } from 'styled-components'; //Подключение для
// import * as theme from 'theme';    // использования тем



ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

