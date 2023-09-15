import React from 'react';

function NotesHeader({ filter, value }) {
  const search = (e) => {
    const value = e.target.value;
    filter(value);
  };

  return (
    <div className="notes-app__header">
      <h1 className="notes-app__title">Notes App</h1>
      <div className="notes-app__search">
        <input
          className="notes-input__search"
          type="text"
          placeholder="enter search"
          value={value}
          onChange={search}
        />
      </div>
    </div>
  );
}
export default NotesHeader;
