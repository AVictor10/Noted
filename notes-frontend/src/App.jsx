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

  const togglePin = (id) => {
  setNotes(notes.map(note =>
    note.id === id ? { ...note, pinned: !note.pinned } : note
  ));
};

const sortedNotes = [...notes].sort((a, b) => {
  return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
});

const [tags, setTags] = useState([])
const [tagInput, setTagInput] = useState('')

  function handleAddNote() {
    if (title.trim() === '' || body.trim() === '') {
      alert("Complete the fields")
      return
    }
    const newNote = { id: Date.now(), title: title, body: body, createdAt: new Date().toLocaleString(), tags:tags }
    setNotes([...notes, newNote])
    setTitle('')
    setBody('')
    setTags([])
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  function handleEditNote(note) {
    setEditingId(note.id)
    setTitle(note.title)
    setBody(note.body)
  }

  function handleAddTag() {
  if (tagInput.trim() === '') return
  setTags([...tags, tagInput.trim()])
  setTagInput('')
}

function handleRemoveTag(tagToRemove) {
  setTags(tags.filter((tag) => tag !== tagToRemove))
}

  function handleUpdateNote() {
    if (title.trim() === '' || body.trim() === '') {
      alert("Complete the fields")
      return
    }
    setNotes(notes.map((note) =>
      note.id === editingId ? { ...note, title: title, body: body } : note
    ))
    setEditingId(null)
    setTitle('')
    setBody('')
  }

  

return (
  <div className="min-h-screen bg-[var(--cream)]">
    <nav className="flex items-center justify-between px-6 py-4 border-b border-[var(--accent)]/20">
      <h1 className="text-xl font-bold text-[var(--ink)] font-[family-name:var(--font-serif)]">Noted</h1>

      <div className="flex items-center gap-6">
        <button className="text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
          Home
        </button>
        <button className="text-sm font-medium text-[var(--ink)]/70 hover:text-[var(--accent)] transition-colors">
          Pinned
        </button>
        <button className="text-sm font-medium text-[var(--ink)]/70 hover:text-[var(--accent)] transition-colors">
          Tags
        </button>
        <button className="text-sm font-medium text-[var(--ink)]/70 hover:text-[var(--accent)] transition-colors">
          Settings
        </button>
      </div>
    </nav>

    <main className="max-w-md mx-auto px-6 pb-6 mt-8">
      <NoteForm
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        editingId={editingId}
        onAdd={handleAddNote}
        onUpdate={handleUpdateNote}
        tagInput={tagInput}
        setTagInput={setTagInput}
        tags={tags}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
      />

      <div className="mt-4 text-center">
        <span className="inline-block bg-[var(--accent)]/20 text-[var(--ink)] text-sm font-medium px-4 py-1.5 rounded-full">
          You have {notes.length} notes
        </span>
      </div>
    </main>

    <section className="max-w-4xl mx-auto px-6 pb-10">
      {notes.length === 0 ? (
        <p className="text-[var(--ink)]/50 text-center mt-10">No notes to display</p>
      ) : (
        <NoteList
          notes={sortedNotes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
          onTogglePin={togglePin}
        />
      )}
    </section>
  </div>
)
}

export default App



// import { useState } from "react"
// import NoteForm from './NoteForm'
// import NoteList from './NoteList'

// function App() {
//   const [notes, setNotes] = useState([
//     { id: 1, title: 'Note 1', body: 'This is note 1' },
//     { id: 2, title: 'Note 2', body: 'This is note 2' },
//     { id: 3, title: 'Note 3', body: 'This is note 3' }
//   ])

//   const [title, setTitle] = useState('')
//   const [body, setBody] = useState('')
//   const [editingId, setEditingId] = useState(null)

//   function handleAddNote() {
//     if(title.trim() === '' || body.trim() === '')
//     {
//       alert("Complete the fields")
//       return
//     }
//     // const newNote = { id: Date.now(), title: title, body: body }
//     const newNote = { id: Date.now(), title: title, body: body, createdAt: new Date().toLocaleString() }
//     setNotes([...notes, newNote])
//     setTitle('')
//     setBody('')
//   }

//   function handleDeleteNote(id) {
//     setNotes(notes.filter((note) => note.id !== id))
//   }

//   function handleEditNote(note) {
//     setEditingId(note.id)
//     setTitle(note.title)
//     setBody(note.body)
//   }

//   function handleUpdateNote() {
//     if(title.trim() === '' || body.trim() === '')
//     {
//       alert("Complete the fields")
//       return
//     }
//     setNotes(notes.map((note) =>
//       note.id === editingId ? { ...note, title: title, body: body } : note
//     ))
//     setEditingId(null)
//     setTitle('')
//     setBody('')
//   }

//   return (
//     <div className="min-h-screen bg-[var(--cream)] p-6">
//       <h1>My Notes App</h1>
//       <p>You have {notes.length} notes</p>

//       <NoteForm
//         title={title}
//         setTitle={setTitle}
//         body={body}
//         setBody={setBody}
//         editingId={editingId}
//         onAdd={handleAddNote}
//         onUpdate={handleUpdateNote}
//       />
      
//       {notes.length === 0 ? (<p>No notes to display</p>) : 
//       (<NoteList
//         notes={notes}
//         onEdit={handleEditNote}
//         onDelete={handleDeleteNote}
//       />)}
      
//     </div>
//   )
// }

// export default App

// import { useState } from "react"

// function App() {
//     const [notes,setNotes] = useState([
//     {id:1, title:'Note 1', body:'This is note 1'},
//     {id:2, title:'Note 2', body:'This is note 2'},
//     {id:3, title:'Note 3', body:'This is note 3'}
// ])

// const[title,setTitle]=useState('') 
// const[body,setBody]=useState('') 
// const[editingId, setEditingId]=useState(null)

// function handleAddNote() {
//   const newNote = { id: Date.now(), title: title, body: body }
//   setNotes([...notes, newNote])
//   setTitle('')
//   setBody('')
// }

// function handleDeleteNote(id) {
//   setNotes(notes.filter((note) => note.id !== id))
// }

// function handleEditNote(note){
//   setEditingId(note.id)
//   setTitle(note.title)
//   setBody(note.body)
// }

// function handleUpdateNote(){
//    setNotes(notes.map((note) =>
//     note.id === editingId ? { ...note, title: title, body: body } : note
//   ))
//   setEditingId(null)
//   setTitle('')
//   setBody('')
// }

// return (
//     <div>
//       <h1>My Notes App</h1>
//       <p>You have {notes.length} notes</p>

//       <input
//        type="text" 
//        placeholder="Title"
//        value={title}
//        onChange={(e) => setTitle(e.target.value)}></input>
//        <input
//        type="text"
//        placeholder="Body"
//        value={body}
//        onChange={(e) => setBody(e.target.value)}></input>

//       <button onClick={editingId ? handleUpdateNote : handleAddNote}>
//            {editingId ? 'Update Note' : 'Add Note'}
//       </button>

//     <div>
//         {notes.map((note) =>(
//             <div key={note.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
//                 <h2>{note.title}</h2>
//                 <p>{note.body}</p>
//                 <button onClick={() => handleEditNote(note)}>Edit</button>
//                 <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
//             </div>  
//         ))}
//     </div>
//     </div>
//   )
// }

// export default App

