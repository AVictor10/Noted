function NoteForm({ title, setTitle, body, setBody, editingId, onAdd, onUpdate, tagInput, setTagInput, tags, onAddTag, onRemoveTag }) {
  return (
    <div className="flex flex-col gap-3 bg-[var(--tan)] border border-[var(--accent)]/30 rounded-xl p-5 mb-6 shadow-sm max-w-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-[var(--accent)]/40 rounded-md px-3 py-2 bg-[var(--cream)] text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border border-[var(--accent)]/40 rounded-md px-3 py-2 bg-[var(--cream)] text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      />

      {/* Tag input row */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          className="flex-1 border border-[var(--accent)]/40 rounded-md px-3 py-2 bg-[var(--cream)] text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <button
          onClick={onAddTag}
          className="px-3 py-2 text-sm bg-[var(--accent)]/20 text-[var(--ink)] rounded-md hover:bg-[var(--accent)]/40 transition-colors duration-200"
        >
          Add Tag
        </button>
      </div>

      {/* Tag chips display */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-[var(--accent)]/20 text-[var(--ink)] text-xs px-2 py-1 rounded-full"
            >
              {tag}
              <button
                onClick={() => onRemoveTag(tag)}
                className="text-[var(--ink)]/60 hover:text-red-500 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <button
        onClick={editingId ? onUpdate : onAdd}
        className="bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 font-medium"
      >
        {editingId ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  )
}

export default NoteForm


// function NoteForm({ title, setTitle, body, setBody, editingId, onAdd, onUpdate }) {
//   return (
//     <div className="flex flex-col gap-3 bg-white border border-amber-200 rounded-lg p-4 mb-4 shadow-sm">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
//       />
//       <input
//         type="text"
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
//       />
//       <button
//         onClick={editingId ? onUpdate : onAdd}
//         className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors duration-200"
//       >
//         {editingId ? 'Update Note' : 'Add Note'}
//       </button>
//     </div>
//   )
// }

// export default NoteForm


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