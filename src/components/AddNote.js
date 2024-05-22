import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { nanoid } from 'nanoid'

export default function AddNote(props) {
  const [note, setNote] = useState({
    id: null,
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNote(prevNote => (
      {
        ...prevNote,
        id: nanoid(),
        [name]: value
      }
    ))
  }

  return (
    <div className="add">
      <input
        onChange={handleChange}
        value={note.title}
        className="add--input"
        type="text"
        name="title"
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        className="add--input"
        name="content"
        placeholder="Take a note..."
      />
      <button 
        onClick={
          () => {
            props.onAdd(note)
            setNote(
              {
                id: null,
                title: "",
                content: ""
              }
            )
          }
        } 
        className="add--button"
      >
        <MdAdd />
      </button>
    </div>
  )
}