import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@cerebral/react';
import React from 'react';
import ReactDOM from 'react-dom';
import controller from './app/cerebral/controller';
import App from './app/components/App';

ReactDOM.render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById('root'),
);
