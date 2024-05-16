import Note from "./Note";
import notes from "../notes";

export default function Main() {
  const allNotes = notes.map(item => (
    <Note key={item.key} title={item.title} content={item.content} />
  ))

  return (
    <div className="main">
      {allNotes}
    </div>
  )
}