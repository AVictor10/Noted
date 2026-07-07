function NoteForm({ title, setTitle, body, setBody, editingId, onAdd, onUpdate }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={editingId ? onUpdate : onAdd}>
        {editingId ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  )
}

export default NoteForm