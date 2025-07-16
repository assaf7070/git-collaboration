const fs = require('fs')
jest.mock('fs')

const { readFromJson, saveToJson } = require('../utils/fileUtils')

describe('fileUtils', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('readFromJson returns parsed JSON if file exists', () => {
    fs.readFileSync.mockReturnValue(JSON.stringify([{ name: 'John' }]))
    const contacts = readFromJson()
    expect(contacts).toEqual([{ name: 'John' }])
  })

  test('readFromJson returns empty array if file read fails', () => {
    fs.readFileSync.mockImplementation(() => { throw new Error('not found') })
    const contacts = readFromJson()
    expect(contacts).toEqual([])
  })

  test('saveToJson writes data to file', () => {
    const contacts = [{ name: 'Alice' }]
    saveToJson(contacts)
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      'contacts.json',
      JSON.stringify(contacts, null, 2),
      'utf-8'
    )
  })
})
