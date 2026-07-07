import { useState } from "react"
import NoteForm from './NoteForm'
import NoteList from './NoteList'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', body: 'This is note 1' },
    { id: 2, title: 'Note 2', body: 'This is note 2' },
    { id: 3, title: 'Note 3', body: 'This is note 3' }
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [editingId, setEditingId] = useState(null)

  function handleAddNote() {
    const newNote = { id: Date.now(), title: title, body: body }
    setNotes([...notes, newNote])
    setTitle('')
    setBody('')
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  function handleEditNote(note) {
    setEditingId(note.id)
    setTitle(note.title)
    setBody(note.body)
  }

  function handleUpdateNote() {
    setNotes(notes.map((note) =>
      note.id === editingId ? { ...note, title: title, body: body } : note
    ))
    setEditingId(null)
    setTitle('')
    setBody('')
  }

  return (
    <div>
      <h1>My Notes App</h1>
      <p>You have {notes.length} notes</p>

      <NoteForm
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        editingId={editingId}
        onAdd={handleAddNote}
        onUpdate={handleUpdateNote}
      />

      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  )
}

export default App