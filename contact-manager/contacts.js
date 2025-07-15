
const handleCommands = require('./commands/commandHandler')

const [,, command, ...args] = process.argv

handleCommands(command, args)
