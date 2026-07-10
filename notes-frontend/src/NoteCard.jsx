function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="border border-[var(--accent)]/30 bg-[var(--tan)] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-[var(--ink)] mb-1 font-[family-name:var(--font-serif)]">{note.title}</h2>
      <p className="text-[var(--ink)]/80 mb-2">{note.body}</p>
      <p className="text-xs text-[var(--ink)]/50 mb-4">{note.createdAt}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(note)}
          className="px-3 py-1.5 text-sm bg-[var(--accent)]/20 text-[var(--ink)] rounded-md hover:bg-[var(--accent)]/40 transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard



// function NoteCard({ note, onEdit, onDelete }) {
//   return (
//     <div className="border border-stone-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
//       <h2 className="text-lg font-semibold text-stone-800 mb-1">{note.title}</h2>
//       <p className="text-stone-600 mb-2">{note.body}</p>
//       <p className="text-xs text-stone-400 mb-4">{note.createdAt}</p>
//       <div className="flex gap-2">
//         <button
//           onClick={() => onEdit(note)}
//           className="px-3 py-1.5 text-sm bg-stone-100 text-stone-700 rounded-md hover:bg-stone-200 transition-colors duration-200"
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => onDelete(note.id)}
//           className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   )
// }

// export default NoteCard

// function NoteCard({ note, onEdit, onDelete }) {
//   return (
//     <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//       <h2>{note.title}</h2>
//       <p>{note.body}</p>
//       <p>{note.createdAt}</p>
//       <button onClick={() => onEdit(note)}>Edit</button>
//       <button onClick={() => onDelete(note.id)}>Delete</button>
//     </div>
//   )
// }

// export default NoteCard