// Dependencies
import Notepad from "./modules/Notepad"

// Create Object
const notepad = new Notepad()

// Create Note
const createForm:any = document.querySelector("#create-note")
createForm.onsubmit = () => {
    // Fetch form requirement
    const title = createForm.querySelector("input[name=title]").value
    const note  = createForm.querySelector("textarea[name=note]").value

    // Retrieve last ID
    const lastID = notepad.notes.length

    // Add note to notes property
    notepad.notes.push(
        {
            id: lastID + 1,
            title: title,
            note:  note
        }
    )

    // Add note to notes storage
    notepad.storage.setItem('notes', JSON.stringify(notepad.notes))

    // Reset the form
    createForm.reset()

    // Call read method
    notepad.read()

    // Call update function
    updateNote()

    // Call delete function
    deleteNote()

    // Prevent default form behavior
    return false
}

// Update note
const updateNote = () => {
    const updates: any = document.querySelectorAll(".update")
    updates.forEach((elem: any) => {
        elem.onclick = () => {
            // Retrieve note ID
            const ID = elem.dataset.id
            let note: any

            // Show modal
            const modal: any = document.querySelector('.overlay')
            modal.classList.remove('hide')

            // Fetch clicked note data
            notepad.notes.forEach((elem: any) => {
                if (elem['id'] == ID) note = elem
            })

            // Find note index: Refrence: https://stackoverflow.com/questions/30114829/find-index-of-array-element-in-another-array-javascript
            const index = notepad.notes.indexOf(note)

            // TODO: Update modal form with clicked note info
            const form: any = modal.querySelector(".form")
            form.querySelector("input[name=id]").value = ID
            form.querySelector("input[name=title]").value = note['title']
            form.querySelector("textarea[name=note]").value = note['note']

            // Update Note Form
            const updateForm:any = document.querySelector("#update-note")
            updateForm.onsubmit = () => {
                // Fetch form requirement
                const title = updateForm.querySelector("input[name=title]").value
                const note  = updateForm.querySelector("textarea[name=note]").value

                // Update the notes
                notepad.notes[index] = {
                    id: ID,
                    title: title,
                    note:  note
                }
                notepad.storage.setItem('notes', JSON.stringify(notepad.notes))

                // Call read method
                notepad.read()

                // Call update function
                updateNote()

                // Call delete function
                deleteNote()

                // Prevent default form behavior
                return false
            }

            // Call read method
            notepad.read()

            // Call delete function
            deleteNote()

            // Method recursion
            updateNote()
        }
    })
}

// Initial load
updateNote()

// Delete Note
const deleteNote = () => {
    const deletes: any = document.querySelectorAll(".delete")
    deletes.forEach((elem: any) => {
        elem.onclick = () => {
            // Retrieve note ID
            const ID = elem.dataset.id

            // Create a new array without the deleted note
            let newNotes: string[] = []
            notepad.notes.forEach((note: any) => {
                if (note['id'] != ID) newNotes.push(note)
            })

            // Set the notes storage and notes preperty to the new notes
            notepad.notes = newNotes
            notepad.storage.setItem('notes', JSON.stringify(newNotes))

            // Call read method
            notepad.read()

            // Call update function
            updateNote()

            // Method recursion
            deleteNote()
        }
    })
}

// Initial call
deleteNote()


// Clean Notes
const clean: any = document.querySelector("#clean")
clean.onclick = () => {
    notepad.clean()
}


// Close modal
const close: any = document.querySelector('.close')
close.onclick = () => {
    const modal: any = document.querySelector('.overlay')
    modal.classList.add('hide')
}
