import React, { useEffect, useState } from 'react'
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [currentNote, setCurrentNote] = useState({
        id: 0,
        text: "",
        isEditable: true
    })

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
        if (savedNotes.length === 0) {
            savedNotes.push({ id: 1, text: "Welcome to Web Notes!", isEditable: false });
            localStorage.setItem("notes", JSON.stringify(savedNotes));
        }
        setNotes(savedNotes);
    }, [])

    const handleAddNote = () => {
        const newNote = {id: Date.now(), text: "New Note", isEditable: true}
        setNotes([...notes, newNote])
        setCurrentNote(newNote);
    }

    const handleSaveNote = (id) => {
        const updatedNotes = notes.map((note) => (
            note.id === id ? {...note, isEditable: false} : note
        ))
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    const handleEditNote = (id) => {
        const updatedNotes = notes.map((note) =>
            note.id === id ? { ...note, isEditable: true } : note
        );
        setNotes(updatedNotes);
    }

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const handleNoteChange = (id, newText) => {
        const updatedNotes = notes.map((note) =>
          note.id === id ? { ...note, text: newText } : note
        );
        setNotes(updatedNotes);
    };

  return (
    <div className='h-screen bg-black'>
        <div className='flex justify-between items-center py-3 px-6 mb-4 border-b'>
            <h2 className='text-xl text-white'>Web Notes</h2>
            <button className='bg-yellow-400 hover:bg-yellow-600 text-white p-2 rounded-2xl' onClick={handleAddNote}>+ Add Note</button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-[300px] h-[200px] overflow-auto rounded-md bg-white shadow-md"
          >
            <div className="p-2 bg-yellow-400 flex justify-end gap-2 text-[18px]">
              {!note.isEditable && (
                <FaEdit
                  color="white"
                  className="cursor-pointer"
                  onClick={() => handleEditNote(note.id)}
                />
              )}
              {note.isEditable && (
                <FaSave
                  color="white"
                  className="cursor-pointer"
                  onClick={() => handleSaveNote(note.id)}
                />
              )}
              <FaTrash
                color="white"
                className="cursor-pointer"
                onClick={() => handleDeleteNote(note.id)}
              />
            </div>
            <textarea
              className="w-full h-[150px] resize-none outline-none p-2"
              value={note.text}
              onChange={(e) => handleNoteChange(note.id, e.target.value)}
              readOnly={!note.isEditable}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes