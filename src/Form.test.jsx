import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const exampleContact = 'Foo';

describe('<Form />', () => {
  let wrapper;
  let onChangeSpy;
  let onSubmitSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    wrapper = shallow(<Form
      name={exampleContact}
      onChange={onChangeSpy}
      onSubmit={onSubmitSpy}
    />);
  });

  it('should render an imput field', () => {
    expect(wrapper.find('input[name="name"][type="text"]')).toHaveLength(1);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });

  it('should call the handleChange callback when the user enter a new contact to the list', () => {
    wrapper.find('input[name="name"][type="text"]').simulate('change', {
      target: {
        value: 'Bar',
      },
    });
    expect(onChangeSpy).toHaveBeenCalledWith('Bar');
  });

  it('should call the handleSubmit callback when the user enter a new contact to the list', () => {
    wrapper.find('input[type="submit"]').simulate('click', {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
