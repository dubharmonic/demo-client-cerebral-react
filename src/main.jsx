import { Container } from '@cerebral/react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import controller from './controller';

import PersonCollection from './PersonCollection';

ReactDOM.render(
  <Container controller={controller}>
    <PersonCollection />
  </Container>,
  document.getElementById('root')
);
