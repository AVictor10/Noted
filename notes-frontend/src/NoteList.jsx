import NoteCard from './NoteCard'

function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default NoteList