import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Prva beleska",
      date: "18/12/1992",
    },
    {
      id: nanoid(),
      text: "Druga beleska",
      date: "26/02/1990",
    },
    {
      id: nanoid(),
      text: "Treca beleska",
      date: "22/04/2022",
    },
    {
      id: nanoid(),
      text: "Nova beleska",
      date: "22/04/2022",
    },
]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
