

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new Error("Email must contain @ symbol");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  return true;
}

function validatePhoneNumber(rawPhone) {
  // Remove anything that's not a digit
  const digitsOnly = rawPhone.replace(/\D/g, '');

  if (digitsOnly.length !== 10) {
    throw new Error("Phone number must contain exactly 10 digits");
  }

  return true;
}



module.exports = {validateEmail,validatePhoneNumber};