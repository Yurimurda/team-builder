import React, { useState } from "react";
const NoteForm = props => {
    console.log("props", props);
    const [note, setNote] = useState({ title: "", body: "" });
  
    const handleChanges = e => {
      console.log(note);
      setNote({ ...note, [e.target.name]: e.target.value });
    };
const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        email="text"
        role="title"
        onChange={handleChanges}
        value={note.title}
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};


export default NoteForm;
