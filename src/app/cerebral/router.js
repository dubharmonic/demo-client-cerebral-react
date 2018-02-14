import Router from '@cerebral/router';

export default Router({
  routes: [
    {
      path: '/',
      signal: 'peopleCollectionViewRouted',
    },
    {
      path: '/people/:personId',
      signal: 'personViewRouted',
    },
    {
      path: '/people/:personId/edit',
      signal: 'personEditRouted',
    },
  ],
  onlyHash: true,
});
