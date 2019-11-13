import React, {useState} from 'react';
import './App.css';
import NoteForm from "./form.js";
import FormAlt from "./formAlt";

function App() {
  const [note, setTeamMember] = useState([
    {
      id: 1,
      name: "Person",
      email:"person@email.com",
        role: "Back-end Engineer"
    }
  ]);

const addNewMember = member =>{
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
  };
  setTeamMember([...note, newMember]);
};

  return (<div>

    <NoteForm addNewMember={addNewMember} />
    <FormAlt note={note}/>
    </div>
  );
}

export default App;
