import React from 'react';
import form from '../components/SearchForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<form page="https://people-search-app.surge.sh">Versium</form>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});