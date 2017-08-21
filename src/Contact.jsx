import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <li>
      {props.name}
    </li>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contact;
