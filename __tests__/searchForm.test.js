import React from 'react';
import SearchForm from '../components/SearchForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('SearchForm', () => {
  it('renders without crashing', () => {
      mount(<SearchForm/>);
  });
});