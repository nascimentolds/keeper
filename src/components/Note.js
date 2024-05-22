import { MdDelete } from 'react-icons/md'

export default function Note(props) {
  return (
    <div className="note">
      <div className="note--header">
        <h3>{props.title}</h3>
      </div>
      <div className="note--content">
        <p>{props.content}</p>
      </div>
      <button 
        className="note--remove" 
        onClick={() => {
          props.onDelete(props.id)
        }}
      >
        <MdDelete />
      </button>
    </div>
  )
}