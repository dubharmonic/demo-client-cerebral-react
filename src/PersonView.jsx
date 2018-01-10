import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import moment from 'moment';
import React from 'react';

export default connect(
  {
    isReady: state`isReady`,
    person: state`person`,
    error: state`error`,
  },
  ({ isReady, person, error }) => (
    <div>
      <p>{error}</p>
      {isReady && (
        <div>
          <p>ID: {person.id}</p>
          <p>First name: {person.firstName}</p>
          <p>Last name: {person.lastName}</p>
          <p>Created: {moment(person.createdAt).format('LLL')}</p>
          <p>Updated: {moment(person.cupdatedAt).format('LLL')}</p>
          <p>
            <a className="btn btn-primary" href={`/#/people/${person.id}/edit`}>
              Edit
            </a>
          </p>
          <p>
            <a className="btn btn-primary" href="/">
              Person List
            </a>
          </p>
        </div>
      )}
    </div>
  ),
);
