  
import SearchForm from './SearchForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  const searchArticle = jest.fn();

  it('should match the snapshot information', () => {
    const wrapper = shallow(
      <SearchForm
        searchArticle={searchArticle}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the searchArticle method article on change', () => {
    const wrapper = shallow(
      <SearchForm
        searchArticle={searchArticle}
      />
    )
    
    const mockInput = { target: { value: 'Stuff' } };

    wrapper.find('input').simulate('change', mockInput);
    expect(searchArticle).toHaveBeenCalled();
  })

})