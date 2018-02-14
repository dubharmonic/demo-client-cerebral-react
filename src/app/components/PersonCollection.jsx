import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import React from 'react';

export default connect(
  {
    isReady: state`isReady`,
    people: state`people`,
    error: state`error`,
  },
  ({ isReady, people, error }) => (
    <div>
      {isReady && (
        <div>
          <h2>Person Collection</h2>
          <p>{error}</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {people.map(person => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>
                    <a href={`/#/people/${person.id}`}>View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  ),
);
