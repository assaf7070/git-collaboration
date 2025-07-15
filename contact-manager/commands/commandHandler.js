
const { addContact, deleteContact, listContacts, searchContacts } = require('../services/contactService')

function printHelp() {
    console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message
`)
}

function handleCommands(command, args) {
    try {
        switch (command) {
            case 'add':
                if (args.length < 3)
                    throw new Error('Missing arguments for add command')
                addContact(args[0], args[1], args[2]);
                break;

            case 'list':
                listContacts()
                break
            case 'search':
                searchContacts(args[1])
                break
            case 'delete':
                deleteContact(args[1])
                break
            case 'help':
                printHelp()
                break
            default:
                console.log(`✗ Error: Unknown command '${command}'`)
                printHelp()
        }
    } catch (err) {
        console.log(`✗ Error: ${err.message}`)
        if (command === 'add') {
            console.log(`Usage: node contacts.js add "name" "email" "phone"`)
        }
    }
} 

module.exports = handleCommand
