import React from 'react';
import NotesItem from './NotesItem';
function NotesActive({ notes, date, onDelete, onMove }) {
  const activeNew = notes.filter((note) => note.archived == false);
  const activeLength = activeNew.length;
  return (
    <div className="notes-active">
      <h2 className="notes-active__title">Notes active</h2>
      <div className={`notes-row ${activeLength == 0 ? 'center' : ''}`}>
        {activeLength !== 0 ? (
          activeNew.map((active) => (
            <NotesItem
              key={active.id}
              id={active.id}
              notes={active}
              date={date}
              onDelete={onDelete}
              onMove={onMove}
              archived={active.archived}
            />
          ))
        ) : (
          <p className="text-no-found">Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}
export default NotesActive;
