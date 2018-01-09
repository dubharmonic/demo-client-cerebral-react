import { Module } from 'cerebral';
import HttpProvider from '@cerebral/http';
import { httpGet } from '@cerebral/http/operators';
import { set } from 'cerebral/operators';
import { state, props, string } from 'cerebral/tags';

export default Module({
  providers: [HttpProvider({ baseUrl: 'http://localhost:8081' })],
  state: {
    isLoading: false,
    people: null,
    error: null,
  },
  signals: {
    loadPeopleClicked: [
      set(state`isLoading`, true),
      httpGet('/people'),
      set(state`isLoading`, false),
    ],
  },
});
