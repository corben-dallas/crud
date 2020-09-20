import React from 'react'

const Notes = ({notes, onNoteRemove, error}) => {
  if (error) return (
    <p className="error">{error}</p>
  );

  return (
    <div className="notes">
      {
        notes.map(note => (
          <div key={note.id} className="note" > 
            <p className="note__text">{note.noteContent}</p>
            <div className="note__btn" onClick={() => onNoteRemove(note.id)}>REMOVE</div>
          </div>
        ))
      }
    </div>
  )
}

export default Notes
