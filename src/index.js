import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const todoTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2E9E4',
    },
    secondary: {
      main: '#C9ADA7',
    },
    background: {
        main: '#22223B',
    },
    list: {
        main: '#9A8C98'
    },
    type: 'dark'
  },
});

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={todoTheme}> 
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
