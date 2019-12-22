//const validator =  require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const NotesUtil = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')
//add , remove , read , list.

//create add a list


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type :'string'
        },
        body: {
            describe:'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        
        NotesUtil.addNotes(argv.title , argv.body)
    }
   
})


//remove a list

yargs.command({

    command:'remove',
    describe:'remove a note',
    builder : {
                title: {
                    describe : 'title to be removed',
                    demandOption : true,
                    type: 'string'
                }
    },
    handler(argv) {
                            NotesUtil.removeNotes(argv.title)
    }
   
})


//list a note

yargs.command({

    command:'list',
    describe:'list the notes',
    handler() {
        NotesUtil.listNotes()
    }
})


//read a note


yargs.command({

    command:'read',
    describe:'read a note',
    builder: {
            title: {
                demandOption:true,
                type: 'string',
                description:'title for the command to read'
            }
    },
    handler(argv) {
        NotesUtil.readNote(argv.title)
    }
})



yargs.parse()


