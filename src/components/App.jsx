import React from "react";
import Header from "./Header";
import Note from "./Note"
import Footer from "./Footer"
import notes from './../notes'


const App = () => {
    return(
        <>
            <Header />
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