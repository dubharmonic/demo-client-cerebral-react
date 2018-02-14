import { connect } from '@cerebral/react';
import { PageHeader } from 'react-bootstrap';
import { state } from 'cerebral/tags';
import React from 'react';

import PersonCollection from './PersonCollection';
import PersonView from './PersonView';
import PersonEdit from './PersonForm';

const pages = {
  personCollection: PersonCollection,
  personView: PersonView,
  personEdit: PersonEdit,
};

export default connect(
  {
    currentPage: state`currentPage`,
  },
  /* eslint-disable prefer-arrow-callback */
  function App({ currentPage }) {
    const Page = pages[currentPage];
    return (
      <div className="container">
        <PageHeader>React Demo UI</PageHeader>
        <main role="main">
          <Page />
        </main>
      </div>
    );
  },
);
