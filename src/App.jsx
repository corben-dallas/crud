import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { getData, updateData } from './requests/requests';

import './App.css';
import Form from './components/Form';
import Notes from './components/Notes';


class App extends Component {
  state = {
    notes: [],
    form: {
      noteContent: '',
    },
    error: '',
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    getData('http://localhost:7777/notes')
      .then(data => this.setState({ notes: data, form: {noteContent: '' } }))
      .catch((err) => {
        console.error(err.message);
        this.setState({ error: err.message });
      });
  }

  handleNoteAdd = () => {
    const { noteContent } = this.state.form;
    updateData('http://localhost:7777/notes', 'POST', {noteContent, id: 0 })
      .then(() => this.fetchNotes())
      .catch((err) => {
        console.error(`${err.message} on note add`);
        this.setState({ error: `${err.message} on note add` });
      });
  }

  handleNoteRemove = (id) => {
    updateData(`http://localhost:7777/notes/${id}`, 'DELETE')
      .then(() => this.fetchNotes())
      .catch((err) => {
        console.error(`${err.message} on note delete`);
        this.setState({ error: `${err.message} on note delete` });
      });
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({ form: { [name]: value } });
  }

  render() {
    const { notes, form, error } = this.state;

    return (
      <React.Fragment>
        <Form form={form} onNoteAdd={this.handleNoteAdd} onInputChange={this.handleInputChange} />
        <Notes notes={notes} onNoteRemove={this.handleNoteRemove} error={error} />
      </React.Fragment>
    )
  }
}

export default App;
