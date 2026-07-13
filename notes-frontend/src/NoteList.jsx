import NoteCard from './NoteCard'

function NoteList({ notes, onEdit, onDelete, onTogglePin }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onTogglePin={onTogglePin}      
          />
      ))}
    </div>
  )
}

export default NoteList


// import NoteCard from './NoteCard'

// function NoteList({ notes, onEdit, onDelete }) {
//   return (
//     <div>
//       {notes.map((note) => (
//         <NoteCard
//           key={note.id}
//           note={note}
//           onEdit={onEdit}
//           onDelete={onDelete}
//         />
//       ))}
//     </div>
//   )
// }

// export default NoteList