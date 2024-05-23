import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { nanoid } from 'nanoid'
import Zoom from '@mui/material/Zoom';

export default function AddNote(props) {
  const [isExpanded, setIsExpanded] = useState(false)
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

  function expand() {
    setIsExpanded(true)
  }

  return (
    <div className="add">
      <input
        onClick={expand}
        onChange={handleChange}
        value={note.title}
        className={`add--input add--title ${warning && "warning"}`}
        type="text"
        name="title"
        placeholder={isExpanded ? "Title" : "Take a note..."}
      />
      {
        isExpanded && 
        <textarea
        onChange={handleChange}
        value={note.content}
        className={`add--input add--content ${warning && "warning"}`}
        name="content"
        placeholder="Take a note..."
      />
      }
      <Zoom in={isExpanded && true}>
        <button
          onClick={addNewNote}
          className="add--button"
        >
          <MdAdd />
        </button>
      </Zoom>
    </div>
  )
}