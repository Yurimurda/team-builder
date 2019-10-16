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
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        id="name"
        onChange={handleChanges}
        value={note.title}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChanges}
        value={note.body}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        type="text"
        onChange={handleChanges}
        value={note.body}
      />
      <button type="submit">submit</button>
    </form>
  );
};


export default NoteForm;
