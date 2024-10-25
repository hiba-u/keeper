import React, { useState } from "react";
import Header from "./Header";
import CreateArea from './CreateArea'
import Note from "./Note"
import Footer from "./Footer"
import notes from './../notes'


const App = () => {
    const [notes, setNotes] = useState([])

    const addNote = (note) => {
        setNotes((prevState) => {
            return [...prevState, note]
        })
    }

    return(
        <>
            <Header />
            <CreateArea addNote={addNote}/>
            {notes.map((note) => {
                return (
                    <Note key={note.id} title={note.title} content={note.content}/>
                )
            })}
            <Footer />
        </>
    )
}

export default App