const fs = require('fs')
const chalk = require('chalk')


// const getNotes = function() {
//     return "Your notes is here!!"
// }

  // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })    

    // const addNotes = function(title , body) {

//     const notes = loadNotes()

//     const duplicateNotes = notes.filter(function(note){
//         return note.title === title
//     })    

//         if(duplicateNotes.length === 0) {
//             notes.push ({
//                 title : title,
//                 body : body
//             })
    
//                 saveNotes(notes)
//                 console.log(chalk.bgGreen("new note added"))
//         }else {
//             console.log(chalk.bgRed("note title taken"))
//         }

      
//     }

// const saveNotes = function(notes) {
// const dataJson = JSON.stringify(notes)
// fs.writeFileSync('notes.json' , dataJson)

// }

// const loadNotes = function() {


//     try {
//     const databuffer = fs.readFileSync('notes.json')
//     const dataJson = databuffer.toString()
//     return JSON.parse(dataJson)
//     } catch(e) {
//         return []
//     }
// }


// const removeNotes = function(title) {

// const notes = loadNotes()

// const nodeMatch = notes.filter(function(note) {

//         return note.title !== title
  
// })


// if(notes.length > nodeMatch.length) {
//     console.log(chalk.bgGreen('note removed'))
// }else {
//     console.log(chalk.bgRed('note not removed'))
// }

// saveNotes(nodeMatch)
// }


// const nodeMatch = notes.filter(function(note) {
    
    //         return note.title !== title
      
    // })





const getNotes = () => "your notes is here"


const addNotes = (title,body) => {


    const notes = loadNotes()

  
    const duplicateNotes = notes.filter((note) => note.title === title)
    


        if(duplicateNotes.length === 0) {
            notes.push ({
                title : title,
                body : body
            })
    
                saveNotes(notes)
                console.log(chalk.bgGreen("new note added"))
        }else {
            console.log(chalk.bgRed("note title taken"))
        }

      

}



const saveNotes = (notes) => {

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJson)

}


const loadNotes = () => {

    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = databuffer.toString()
        return JSON.parse(dataJson)
        } catch(e) {
            return []
        }

}





const removeNotes = (title) => {

    const notes = loadNotes()

    

    const nodeMatch = notes.filter((note) => note.title !== title)
    
    
    if(notes.length > nodeMatch.length) {
        console.log(chalk.bgGreen('note removed'))
    }else {
        console.log(chalk.bgRed('note not removed'))
    }
    
    saveNotes(nodeMatch)

}

const listNotes = () => {

console.log(chalk.bgGreen('Your notes'))
const notes = loadNotes()
notes.forEach((note) => {
    console.log(note.title)
})

}

const readNote = (title) => { 
const notes = loadNotes()

const matchTitle = notes.find((note) =>note.title === title) 

if(!matchTitle)  {
    console.log(chalk.red("no note found"))
}
else {
    console.log(chalk.bold.green(matchTitle.title))
    console.log(matchTitle.body)
}

}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNote:readNote
}