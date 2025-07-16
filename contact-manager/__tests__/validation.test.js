const { validateEmail, validatePhoneNumber } = require('../utils/validation')

describe('validateEmail', () => {
  test('valid email passes', () => {
    expect(validateEmail('john@example.com')).toBe(true)
  })

  test('missing @ throws error', () => {
    expect(() => validateEmail('johnexample.com')).toThrow('Email must contain @ symbol')
  })

  test('invalid format throws error', () => {
    expect(() => validateEmail('john@com')).toThrow('Invalid email format')
  })
})

describe('validatePhoneNumber', () => {
  test('valid phone number passes', () => {
    expect(validatePhoneNumber('555-123-4567')).toBe(true)
  })

  test('phone with less than 10 digits throws', () => {
    expect(() => validatePhoneNumber('5551234')).toThrow('Phone number must contain exactly 10 digits')
  })
})
