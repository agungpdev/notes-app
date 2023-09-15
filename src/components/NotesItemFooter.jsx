import React from 'react';
import DeleteButton from './DeleteButton';
import MoveButton from './MoveButton';
function NotesItemFooter({ id, archived, onDelete, onMove }) {
  return (
    <div className="notes-item__footer">
      <MoveButton id={id} archived={archived} onMove={onMove} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
export default NotesItemFooter;
