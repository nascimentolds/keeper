import Note from "./Note";
import data from "../notes";
import AddNote from "./AddNote";
// import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";

export default function Main() {
  const [notes, setNotes] = useState(() => {
    const notesOnStorage = localStorage.getItem("notes")
    return notesOnStorage ? JSON.parse(notesOnStorage) : []
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function addNote(note) {
    setNotes(prevNotes => (
      [
        ...prevNotes,
        note
      ]
    ))
  }

  function deleteNote(id) {
    setNotes(
       notes.filter(item => {
        return item.id !== id
      })
    )
  }

  const allNotes = notes.map(item => (
    <Note 
      key={item.id} 
      title={item.title} 
      content={item.content} 
      onDelete={deleteNote}
      id={item.id}
    />
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