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
    if(title.trim() === '' || body.trim() === '')
    {
      alert("Complete the fields")
      return
    }
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
    if(title.trim() === '' || body.trim() === '')
    {
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
      
      {notes.length === 0 ? (<p>No notes to display</p>) : 
      (<NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />)}
      
    </div>
  )
}

export default App

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

