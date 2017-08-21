import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: '',
      contacts: [],
      search: '',
    };

    this.handleChangeAddName = this.handleChangeAddName.bind(this);
    this.handleSubmitAddName = this.handleSubmitAddName.bind(this);
    this.handleChangeSearchName = this.handleChangeSearchName.bind(this);
    this.handleSubmitSearchName = this.handleSubmitSearchName.bind(this);
  }

  handleChangeAddName(changes) {
    this.setState(() => ({
      contact: changes,
    }));
  }

  handleSubmitAddName() {
    this.setState(prevState => ({
      contact: '',
      contacts: prevState.contacts.concat(prevState.contact),
    }));
  }

  handleChangeSearchName(changes) {
    this.setState(() => ({
      search: changes,
    }));
  }

  handleSubmitSearchName() {
    const { contacts, search } = this.state;

    const selection = contacts.filter(contact => (
      contact.indexOf(search) !== -1
    ));

    this.setState({
      contacts: selection,
      search: '',
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contact List</h2>
        </div>
        <div>
          Name:
          <Form
            name={this.state.contact}
            onChange={this.handleChangeAddName}
            onSubmit={this.handleSubmitAddName}
          />
        </div>
        <div>
          Search:
          <Form
            name={this.state.search}
            onChange={this.handleChangeSearchName}
            onSubmit={this.handleSubmitSearchName}
          />
        </div>
        {this.state.contacts.length !== 0
          ? <Contacts contacts={this.state.contacts} />
          : ''
        }
      </div>
    );
  }
}

export default App;
