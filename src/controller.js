import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';
import app from './app/index';

export default Controller(app, {
  devtools: Devtools({
    host: 'localhost:8082',
  }),
});
