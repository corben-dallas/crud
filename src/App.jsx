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
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    getData('http://localhost:7777/notes')
      .then(data => this.setState({ notes: data, form: {noteContent: '' } }));
  }

  handleNoteAdd = () => {
    const { noteContent } = this.state.form;
    updateData('http://localhost:7777/notes', 'POST', {noteContent, id: 0 })
      .then(() => this.fetchNotes())
  }

  handleNoteRemove = (id) => {
    updateData(`http://localhost:7777/notes/${id}`, 'DELETE')
      .then(() => this.fetchNotes());
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({ form: { [name]: value } });
  }

  render() {
    const {notes, form} = this.state;

    return (
      <React.Fragment>
        <Form form={form} onNoteAdd={this.handleNoteAdd} onInputChange={this.handleInputChange} />
        <Notes notes={notes} onNoteRemove={this.handleNoteRemove} />
      </React.Fragment>
    )
  }
}

export default App;
