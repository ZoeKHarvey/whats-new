import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state of currentSubject when selectSubject is called', () => {
    const wrapper = shallow(<App />);
    const mockSelectSubject = 'Local'
    const expected = 'Local';

    wrapper.instance().selectNews(mockSelectSubject)
    expect(wrapper.state('currentSubject')).toEqual(expected);
  });
})

