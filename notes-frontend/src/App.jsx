const notes = [
    {id:1, title:'Note 1', body:'This is note 1'},
    {id:2, title:'Note 2', body:'This is note 2'},
    {id:3, title:'Note 3', body:'This is note 3'}
]
function App() {
  return (
    <div>
      <h1>My Notes App</h1>
    <div>
        {notes.map((note) =>(
            <div key={note.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
            </div>
        ))}
    </div>
    </div>

  )
}

export default App