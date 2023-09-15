import React from 'react';
function NotesItemBody({ notes, date }) {
  const dateID = date(notes.createdAt);
  return (
    <div>
      <h2 className="notes-item__title">{notes.title}</h2>
      <p className="notes-item__date">{dateID}</p>
      <p className="notes-item__content">{notes.body}</p>
    </div>
  );
}
export default NotesItemBody;
