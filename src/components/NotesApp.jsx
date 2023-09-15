import React from 'react';
import NotesHeader from './NotesHeader';
import NotesInput from './NotesInput';
import NotesActive from './NotesActive';
import { getInitialData, showFormattedDate } from '../utils/index';
import NotesArchive from './NotesArchive';
class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onFilterNotesHandler = this.onFilterNotesHandler.bind(this);
  }

  onFilterNotesHandler(query) {
    this.setState((prevState) => {
      const newNotes = [...prevState.notes];

      if (query.length == 0) {
        return { search: query, notes: getInitialData() };
      }

      const filterNotes = newNotes.filter(
        (item) =>
          item.title
            .toString()
            .toLowerCase()
            .indexOf(query.toString().toLowerCase()) !== -1
      );
      return { search: query, notes: filterNotes };
    });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  onMoveHandler(archived, id) {
    const idx = this.state.notes.findIndex((note) => note.id === id);
    if (idx === -1) {
      alert('Data tidak ditemukan');
    } else {
      this.setState((prevState) => {
        let newState = [...prevState.notes];
        newState[idx] = { ...newState[idx], archived };
        return {
          notes: newState,
        };
      });
    }
  }
  render() {
    return (
      <>
        <NotesHeader
          value={this.state.search}
          filter={this.onFilterNotesHandler}
        />
        <div className="container">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesActive
            notes={this.state.notes}
            date={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
          <NotesArchive
            notes={this.state.notes}
            date={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
        </div>
      </>
    );
  }
}
export default NotesApp;
