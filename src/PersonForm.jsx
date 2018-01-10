import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import React from 'react';

export default connect(
  {
    isReady: state`isReady`,
    person: state`person`,
    error: state`error`,
    updatePerson: signal`updatePerson`,
    submitPerson: signal`submitPerson`,
  },
  ({ isReady, person, error, updatePerson, submitPerson }) => (
    <div>
      <p>{error}</p>
      {isReady && (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              submitPerson(person);
            }}
          >
            <p>
              {person.firstName} {person.lastName}
            </p>
            <p>
              <label htmlFor="firstName">
                First Name:
                <input
                  id="firstName"
                  name="firstName"
                  onChange={e =>
                    updatePerson({ key: e.target.name, value: e.target.value })
                  }
                  type="text"
                  value={person.firstName}
                />
              </label>
            </p>
            <p>
              <label htmlFor="lastName">
                Last Name:
                <input
                  id="lastName"
                  name="lastName"
                  onChange={e =>
                    updatePerson({ key: e.target.name, value: e.target.value })
                  }
                  type="text"
                  value={person.lastName}
                />
              </label>
            </p>
            <p>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </p>
          </form>
        </div>
      )}
    </div>
  ),
);
