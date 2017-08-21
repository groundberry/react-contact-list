import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.value;
    this.props.onChange(name);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form>
        <label>
          <input
            name="name"
            type="text"
            value={this.props.name}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            onClick={this.handleSubmit}
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
