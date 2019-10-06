import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <NewsArticle
        key={1}
        id={1}
        headline="This headline"
        image="This Image"
        description="This description"
        url="https://www.thetests.com"
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})