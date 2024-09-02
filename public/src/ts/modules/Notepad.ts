const Notepad = class {
    storage: any = window.localStorage
    notes:   any;
    table: any = document.querySelector(".table");

    // COnstructor method
    constructor() {
        // Check local storage
        if(!this.storage.getItem("notes")) this.storage.setItem("notes", JSON.stringify([]))

        // Retrieve notes
        this.notes = JSON.parse(this.storage.getItem("notes"))

        // Call the read method
        this.read()
    }


    // Create note
    create() {
        // TODO
    }

    // Read note
    read() {
        // Reset the table
        this.table.querySelector("tbody").innerHTML = ""
        this.table.querySelector("tfoot").style.display = "none"

        // Loop Notes
        for (let note of this.notes) {
            // Create tr
            const tr = document.createElement("tr")

            // Update tbody with the new tr
            this.table.querySelector("tbody").appendChild(tr)

            // Update the tr content
            tr.innerHTML = `
            <td>${note["title"]}</td>
            <td>
                <a href="#" class="update" data-id="${note["id"]}"><i class="fa-solid fa-pen-to-square green"></i></a>
                <a href="#" class="delete" data-id="${note["id"]}"><i class="fa-solid fa-trash-can red"></i></a>
            </td>
            `
        }

        // Check notes
        if (this.notes.length == 0) this.table.querySelector("tfoot").style.display = "block"
    }
    

    // Update note
    update() {
        // TODO
    }

    // Delete note
    delete() {
        // TODO
    }

    // Clean notes
    clean() {
        this.storage.setItem("notes", JSON.stringify([]))
        this.notes = JSON.parse(this.storage.getItem("notes"))
        this.table.querySelector("tbody").innerHTML = ""
        this.table.querySelector("tfoot").style.display = "block"
    }
}

export default Notepad;