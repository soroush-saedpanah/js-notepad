(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scripts"] = factory();
	else
		root["scripts"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/ts/modules/Notepad.ts":
/*!******************************************!*\
  !*** ./public/src/ts/modules/Notepad.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Notepad = class {
    // COnstructor method
    constructor() {
        this.storage = window.localStorage;
        this.table = document.querySelector(".table");
        // Check local storage
        if (!this.storage.getItem("notes"))
            this.storage.setItem("notes", JSON.stringify([]));
        // Retrieve notes
        this.notes = JSON.parse(this.storage.getItem("notes"));
        // Call the read method
        this.read();
    }
    // Create note
    create() {
        // TODO
    }
    // Read note
    read() {
        // Reset the table
        this.table.querySelector("tbody").innerHTML = "";
        this.table.querySelector("tfoot").style.display = "none";
        // Loop Notes
        for (let note of this.notes) {
            // Create tr
            const tr = document.createElement("tr");
            // Update tbody with the new tr
            this.table.querySelector("tbody").appendChild(tr);
            // Update the tr content
            tr.innerHTML = `
            <td>${note["title"]}</td>
            <td>
                <a href="#" class="update" data-id="${note["id"]}"><i class="fa-solid fa-pen-to-square green"></i></a>
                <a href="#" class="delete" data-id="${note["id"]}"><i class="fa-solid fa-trash-can red"></i></a>
            </td>
            `;
        }
        // Check notes
        if (this.notes.length == 0)
            this.table.querySelector("tfoot").style.display = "block";
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
        this.storage.setItem("notes", JSON.stringify([]));
        this.notes = JSON.parse(this.storage.getItem("notes"));
        this.table.querySelector("tbody").innerHTML = "";
        this.table.querySelector("tfoot").style.display = "block";
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notepad);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./public/src/ts/scripts.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Notepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Notepad */ "./public/src/ts/modules/Notepad.ts");
// Dependencies

// Create Object
const notepad = new _modules_Notepad__WEBPACK_IMPORTED_MODULE_0__["default"]();
// Create Note
const createForm = document.querySelector("#create-note");
createForm.onsubmit = () => {
    // Fetch form requirement
    const title = createForm.querySelector("input[name=title]").value;
    const note = createForm.querySelector("textarea[name=note]").value;
    // Retrieve last ID
    const lastID = notepad.notes.length;
    // Add note to notes property
    notepad.notes.push({
        id: lastID + 1,
        title: title,
        note: note
    });
    // Add note to notes storage
    notepad.storage.setItem('notes', JSON.stringify(notepad.notes));
    // Reset the form
    createForm.reset();
    // Call read method
    notepad.read();
    // Call update function
    updateNote();
    // Call delete function
    deleteNote();
    // Prevent default form behavior
    return false;
};
// Update note
const updateNote = () => {
    const updates = document.querySelectorAll(".update");
    updates.forEach((elem) => {
        elem.onclick = () => {
            // Retrieve note ID
            const ID = elem.dataset.id;
            let note;
            // Show modal
            const modal = document.querySelector('.overlay');
            modal.classList.remove('hide');
            // Fetch clicked note data
            notepad.notes.forEach((elem) => {
                if (elem['id'] == ID)
                    note = elem;
            });
            // Find note index: Refrence: https://stackoverflow.com/questions/30114829/find-index-of-array-element-in-another-array-javascript
            const index = notepad.notes.indexOf(note);
            // TODO: Update modal form with clicked note info
            const form = modal.querySelector(".form");
            form.querySelector("input[name=id]").value = ID;
            form.querySelector("input[name=title]").value = note['title'];
            form.querySelector("textarea[name=note]").value = note['note'];
            // Update Note Form
            const updateForm = document.querySelector("#update-note");
            updateForm.onsubmit = () => {
                // Fetch form requirement
                const title = updateForm.querySelector("input[name=title]").value;
                const note = updateForm.querySelector("textarea[name=note]").value;
                // Update the notes
                notepad.notes[index] = {
                    id: ID,
                    title: title,
                    note: note
                };
                notepad.storage.setItem('notes', JSON.stringify(notepad.notes));
                // Call read method
                notepad.read();
                // Call update function
                updateNote();
                // Call delete function
                deleteNote();
                // Prevent default form behavior
                return false;
            };
            // Call read method
            notepad.read();
            // Call delete function
            deleteNote();
            // Method recursion
            updateNote();
        };
    });
};
// Initial load
updateNote();
// Delete Note
const deleteNote = () => {
    const deletes = document.querySelectorAll(".delete");
    deletes.forEach((elem) => {
        elem.onclick = () => {
            // Retrieve note ID
            const ID = elem.dataset.id;
            // Create a new array without the deleted note
            let newNotes = [];
            notepad.notes.forEach((note) => {
                if (note['id'] != ID)
                    newNotes.push(note);
            });
            // Set the notes storage and notes preperty to the new notes
            notepad.notes = newNotes;
            notepad.storage.setItem('notes', JSON.stringify(newNotes));
            // Call read method
            notepad.read();
            // Call update function
            updateNote();
            // Method recursion
            deleteNote();
        };
    });
};
// Initial call
deleteNote();
// Clean Notes
const clean = document.querySelector("#clean");
clean.onclick = () => {
    notepad.clean();
};
// Close modal
const close = document.querySelector('.close');
close.onclick = () => {
    const modal = document.querySelector('.overlay');
    modal.classList.add('hide');
};

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=scripts.js.map