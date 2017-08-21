import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import Contacts from './Contacts';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render two forms', () => {
    expect(wrapper.find(Form)).toHaveLength(2);
  });

  it('should render a list of contacts if there are any', () => {
    wrapper.setState({
      contacts: [
        'Foo',
        'Bar',
        'Baz',
      ],
    });
    expect(wrapper.find(Contacts)).toHaveLength(1);
  });
});
