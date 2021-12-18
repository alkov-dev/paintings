import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import ThemeProvider from './context/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


