import React from 'react';
function MoveButton({ id, onMove, archived }) {
  return (
    <button
      className="btn btn-arsip"
      onClick={() => onMove(archived ? false : true, id)}
    >
      {archived ? 'Pindahkan' : 'Arsip'}
    </button>
  );
}
export default MoveButton;
