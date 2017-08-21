import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  it('should render a contact name', () => {
    const wrapper = shallow(<Contact name="Foo" />);
    expect(wrapper.text()).toBe('Foo');
  });
});
