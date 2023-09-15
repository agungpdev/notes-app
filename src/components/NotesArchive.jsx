import React from 'react';
import NotesItem from './NotesItem';
function NotesArchive({ notes, date, onDelete, onMove }) {
  const archiveNew = notes.filter((note) => note.archived == true);
  const archiveLength = archiveNew.length;
  return (
    <div className="notes-archive" style={{ marginTop: '3.6rem' }}>
      <h2 className="notes-active__title">Notes Archive</h2>
      <div className={`notes-row ${archiveLength == 0 ? 'center' : ''}`}>
        {archiveLength !== 0 ? (
          archiveNew.map((archive) => (
            <NotesItem
              key={archive.id}
              id={archive.id}
              notes={archive}
              date={date}
              onDelete={onDelete}
              onMove={onMove}
              archived={archive.archived}
            />
          ))
        ) : (
          <p className="text-no-found">Tidak ada arsip</p>
        )}
      </div>
    </div>
  );
}
export default NotesArchive;
