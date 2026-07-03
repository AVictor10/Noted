import { useState } from "react"

function App() {
    const [notes,setNotes] = useState([
    {id:1, title:'Note 1', body:'This is note 1'},
    {id:2, title:'Note 2', body:'This is note 2'},
    {id:3, title:'Note 3', body:'This is note 3'}
])

const[title,setTitle]=useState('') 
const[body,setBody]=useState('') 

function handleAddNote() {
  const newNote = { id: Date.now(), title: title, body: body }
  setNotes([...notes, newNote])
  setTitle('')
  setBody('')
}

function handleDeleteNote(id) {
  setNotes(notes.filter((note) => note.id !== id))
}


return (
    <div>
      <h1>My Notes App</h1>
      <p>You have {notes.length} notes</p>

      <input
       type="text" 
       placeholder="Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}></input>
       <input
       type="text"
       placeholder="Body"
       value={body}
       onChange={(e) => setBody(e.target.value)}></input>

      <button onClick={handleAddNote}>Add Note</button>
      <p>Current title: {title}</p>
    <div>
        {notes.map((note) =>(
            <div key={note.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>  
        ))}
    </div>
    </div>
  )
}

export default App