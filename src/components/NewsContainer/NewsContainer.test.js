import React from 'react';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';
import local from "../../data/local"

describe("NewsContainer", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<NewsContainer currentSubject={local} />);

    expect(wrapper).toMatchSnapshot();
  });
});