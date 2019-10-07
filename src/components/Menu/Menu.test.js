
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

  it("should change data upon the local category being selected", () => {
    const mockChangeData = jest.fn();
    const wrapper = shallow(
      <Menu
        selectSubject={ mockChangeData} 
        categories="1 2 3 4 5" key="1"
      />
    );

    const mockEvent = {
      target: {
        id: "Local"
      }
    };

    wrapper
      .find("li")
      .at(0)
      .simulate("click", mockEvent);

    expect(mockChangeData).toHaveBeenCalledWith("1");
  });




});