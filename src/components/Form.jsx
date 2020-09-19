import React from 'react';

const Form = ({form, onNoteAdd, onInputChange}) => {
  return (
    <div className="form">
      <textarea 
        name="noteContent"
        className="form__input"
        value={form.noteContent}
        onChange={onInputChange}
        placeholder="Write a note here"
      />
      <button 
        className={`form__btn ${!form.noteContent ? 'form__btn--disabled' : ''}`}
        onClick={onNoteAdd}
        disabled={!form.noteContent}
      >
        Add
      </button>
    </div>
  )
}

export default Form;
