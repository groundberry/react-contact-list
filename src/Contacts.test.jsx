import React from 'react';
import { shallow } from 'enzyme';
import Contacts from './Contacts';
import Contact from './Contact';

const sampleContacts = [
  'Foo',
  'Bar',
];

describe('<Contacts />', () => {
  it('should render a list of contact names if there are any', () => {
    const wrapper = shallow(<Contacts contacts={sampleContacts} />);
    expect(wrapper.find(Contact)).toHaveLength(2);
  });

  it('should not render a list of contact names if there not any', () => {
    const wrapper = shallow(<Contacts contacts={[]} />);
    expect(wrapper.find(Contact)).toHaveLength(0);
  });
});
