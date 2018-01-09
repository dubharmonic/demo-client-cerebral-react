// import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

export default connect(
  {
    isLoading: state`isLoading`,
    people: state`people`,
    error: state`error`,
    loadPeopleClicked: signal`loadPeopleClicked`,
  },
  function PersonCollection({ isLoading, loadPeopleClicked, error }) {
    return (
      <div>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => loadPeopleClicked()}>
          Hello?
        </button>
        {isLoading && <p>Loading</p>}
      </div>
    );
  }
);
