import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

function Contacts(props) {
  return (
    <ul>
      {props.contacts.map((contact, index) => (
        <Contact
          name={contact}
          key={index}
        />
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
};

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;
