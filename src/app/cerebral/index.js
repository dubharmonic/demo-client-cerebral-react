import { Module } from 'cerebral';
import HttpProvider from '@cerebral/http';
import { httpGet, httpPut } from '@cerebral/http/operators';
import { set } from 'cerebral/operators';
import { state, props, string } from 'cerebral/tags';
import router from './router';

export default Module({
  modules: { router },
  providers: { http: HttpProvider({ baseUrl: 'http://localhost:8081' }) },
  state: {
    currentPage: 'personCollection',
    isReady: false,
    people: null,
    person: null,
    error: null,
  },
  signals: {
    peopleCollectionViewRouted: [
      set(state`isReady`, false),
      set(state`currentPage`, 'personCollection'),
      httpGet('/people'),
      {
        success: set(state`people`, props`response.result`),
        error: set(state`error`, 'error!'),
      },
      set(state`isReady`, true),
    ],
    personViewRouted: [
      set(state`isReady`, false),
      set(state`currentPage`, 'personView'),
      httpGet(string`/people/${props`personId`}`),
      {
        success: set(state`person`, props`response.result`),
        error: set(state`error`, 'error!'),
      },
      set(state`isReady`, true),
    ],
    personEditRouted: [
      set(state`isReady`, false),
      set(state`currentPage`, 'personEdit'),
      httpGet(string`/people/${props`personId`}`),
      {
        success: set(state`person`, props`response.result`),
        error: set(state`error`, 'error!'),
      },
      set(state`isReady`, true),
    ],
    updatePerson: [set(state`person.${props`key`}`, props`value`)],
    submitPerson: [
      httpPut(string`/people/${state`person.id`}`, state`person`),
      {
        success: set(state`error`, 'Success!'),
        error: set(state`error`, 'Error!'),
      },
    ],
  },
});
