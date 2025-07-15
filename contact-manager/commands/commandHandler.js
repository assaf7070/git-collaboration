
const { addContact, deleteContact, listContact, searchContact } = require('../services/contactService')

function printHelp() {
    console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message

Examples:
  node contacts.js add "John Doe" "john@example.com" "555-123-4567"
  node contacts.js search "john"
  node contacts.js delete "john@example.com"
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
                listContact()
                break
            case 'search':
                searchContact(args[0])
                break
            case 'delete':
                deleteContact(args[0])
                break
            case 'help':
                printHelp()
                break
            default:
                console.log(`✗ Error: Unknown command '${command}'`)
                console.log(`Usage: node contacts.js [add|list|search|delete|help] [arguments]`)
        }
    } catch (err) {
        console.log(`✗ Error: ${err.message}`)
        if (command === 'add' && err.message === "Missing arguments for add command") {
            console.log(`Usage: node contacts.js add "name" "email" "phone"`)
        }
    }
} 

module.exports = handleCommands
