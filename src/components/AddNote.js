import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { nanoid } from 'nanoid'

export default function AddNote(props) {
  const [warning, setWarning] = useState(false)
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

  function addNewNote() {
      if (note.title === "" || note.content === "") {
        setWarning(true)
      } else {
        setWarning(false)
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

  return (
    <div className="add">
      <input
        onChange={handleChange}
        value={note.title}
        className={`add--input add--title ${warning && "warning"}`}
        type="text"
        name="title"
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        className={`add--input add--content ${warning && "warning"}`}
        name="content"
        placeholder="Take a note..."
      />
      <button
        onClick={addNewNote}
        className="add--button"
      >
        <MdAdd />
      </button>
    </div>
  )
}