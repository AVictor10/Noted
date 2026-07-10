function NoteForm({ title, setTitle, body, setBody, editingId, onAdd, onUpdate }) {
  return (
    <div className="flex flex-col gap-3 bg-white border border-amber-200 rounded-lg p-4 mb-4 shadow-sm">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      <button
        onClick={editingId ? onUpdate : onAdd}
        className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors duration-200"
      >
        {editingId ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  )
}

export default NoteForm


// function NoteForm({ title, setTitle, body, setBody, editingId, onAdd, onUpdate }) {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <button onClick={editingId ? onUpdate : onAdd}>
//         {editingId ? 'Update Note' : 'Add Note'}
//       </button>
//     </div>
//   )
// }

// export default NoteForm