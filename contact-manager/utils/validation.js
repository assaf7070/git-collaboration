

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new Error("Email must contain @ symbol")
  }
}

module.exports = validateEmail;