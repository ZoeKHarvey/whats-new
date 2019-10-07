  
import SearchForm from './SearchForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  const searched = jest.fn();

  it('should match the snapshot information passed correctly', () => {
    const wrapper = shallow(
      <SearchForm
        searched={searched}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

})