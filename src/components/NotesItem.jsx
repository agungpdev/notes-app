import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemFooter from './NotesItemFooter';
function NotesItem({ id, notes, date, onDelete, onMove, archived }) {
  return (
    <div className="notes-item">
      <NotesItemBody notes={notes} date={date} />
      <NotesItemFooter
        id={id}
        archived={archived}
        onDelete={onDelete}
        onMove={onMove}
      />
    </div>
  );
}
export default NotesItem;
