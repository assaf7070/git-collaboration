jest.mock('../services/contactService')

const { addContact, deleteContact, listContact, searchContact } = require('../services/contactService')
const handleCommands = require('../commands/commandHandler')

describe('handleCommands', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('handles add command with correct args', () => {
    handleCommands('add', ['John', 'john@example.com', '555-123-4567'])
    expect(addContact).toHaveBeenCalledWith('John', 'john@example.com', '555-123-4567')
  })

  test('shows error for add with missing args', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    handleCommands('add', ['John'])
    expect(logSpy).toHaveBeenCalledWith('✗ Error: Missing arguments for add command')
    logSpy.mockRestore()
  })

  test('handles list command', () => {
    handleCommands('list', [])
    expect(listContact).toHaveBeenCalled()
  })

  test('handles search command', () => {
    handleCommands('search', ['john'])
    expect(searchContact).toHaveBeenCalledWith('john')
  })

  test('handles delete command', () => {
    handleCommands('delete', ['john@example.com'])
    expect(deleteContact).toHaveBeenCalledWith('john@example.com')
  })

  test('handles unknown command', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    handleCommands('foo', [])
    expect(logSpy).toHaveBeenCalledWith("✗ Error: Unknown command 'foo'")
    logSpy.mockRestore()
  })
})
