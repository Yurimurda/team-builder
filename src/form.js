import React, { useState } from "react";

const NoteForm = props => {
    const [note, setNote] = useState({ name: '', email: '', role:'' });
  
    const handleChanges = e => {
      setNote({ ...note, [e.target.name]: e.target.value });
      console.log(e.target.name);
    };

const submitForm = addNote => {
  addNote.preventDefault();
    props.addNewMember(note);
    setNote({ name: '', email: '', role:'' });
    console.log(note);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={note.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={note.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={note.role}
      />
      <button type="submit">submit</button>
    </form>
  );
};


export default NoteForm;
