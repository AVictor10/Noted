function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  )
}

export default NoteCard