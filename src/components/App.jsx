import React, { useState } from "react";
import Header from "./Header";
import CreateArea from './CreateArea'
import Note from "./Note"
import Footer from "./Footer"


const App = () => {
    const [notes, setNotes] = useState([])

    const addNote = (note) => {
        setNotes((prevState) => {
            return [...prevState, note]
        })
    }

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note, index) => {
            return index !== id
        })
        
        setNotes(newNotes);
    }

    return(
        <>
            <Header />
            <CreateArea addNote={addNote}/>
            {notes.map((note, index) => {
                return (
                    <Note key={index} title={note.title} content={note.content} onDelete={deleteNote} id={index}/>
                )
            })}
            <Footer />
        </>
    )
}

export default App