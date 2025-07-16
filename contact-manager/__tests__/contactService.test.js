jest.mock('../utils/fileUtils')
jest.mock('../utils/validation')

const { readFromJson, saveToJson } = require('../utils/fileUtils')
const validation = require('../utils/validation')
const { addContact, deleteContact } = require('../services/contactService')

describe('addContact', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('adds contact if email is unique', () => {
    readFromJson.mockReturnValue([])
    validation.validateEmail.mockReturnValue(true)
    validation.validatePhoneNumber.mockReturnValue(true)

    expect(() => {
      addContact('John', 'john@example.com', '555-123-4567')
    }).not.toThrow()

    expect(saveToJson).toHaveBeenCalledWith([
      { name: 'John', email: 'john@example.com', phone: '555-123-4567' }
    ])
  })

  test('throws error if email already exists', () => {
    readFromJson.mockReturnValue([{ email: 'john@example.com' }])
    expect(() => {
      addContact('John', 'john@example.com', '555-123-4567')
    }).toThrow('Contact with this email already exists')
  })
})

describe('deleteContact', () => {
  test('deletes a contact by email', () => {
    readFromJson.mockReturnValue([
      { name: 'John', email: 'john@example.com', phone: '555-123-4567' }
    ])

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    deleteContact('john@example.com')
    expect(saveToJson).toHaveBeenCalledWith([])
    logSpy.mockRestore()
  })

  test('logs error if contact not found', () => {
    readFromJson.mockReturnValue([])
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    deleteContact('noone@example.com')
    expect(logSpy).toHaveBeenCalledWith('✗ Error: No contact found with email: noone@example.com')
    logSpy.mockRestore()
  })
})
