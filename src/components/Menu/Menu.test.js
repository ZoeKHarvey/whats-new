
import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Menu
        selectSubject={jest.fn()}
        categories="all the categories" key="1"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});