import React from 'react';
import list from '../components/SearchList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<list page="https://people-search-app.surge.sh">Versium</list>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});