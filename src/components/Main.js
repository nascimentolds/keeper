import Note from "./Note";
// import notes from "../notes";
import AddNote from "./AddNote";
import { nanoid } from 'nanoid';
import { useState } from "react";

export default function Main() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "teste",
      content: "Testando uma nova nota."
    }
  ])

  function addNote(note) {
    setNotes(prevNotes => (
      {
        ...prevNotes,
        note
      }
    ))
  }

  const allNotes = notes.map(item => (
    <Note key={item.id} title={item.title} content={item.content} />
  ))

  return (
    <div className="main">
      <AddNote onAdd={addNote} />
      <div className="notes">
        {allNotes}
      </div>
    </div>
  )
}