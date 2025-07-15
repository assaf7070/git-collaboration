const { readFromJson, saveToJson } = require("../utils/fileUtils");
const validateEmail = require("../utils/validation");



function listContact() {
    const contacts = readFromJson();
    console.log("");
    if (contacts.length === 0) {
        console.log("=== is Empty ===")
    } else {
        console.log("=== All Contacts ===")
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}.  ${contact.name} - ${contact.email} - ${contact.phone}`)
        })
    }
}



function searchContact(name) {
    const contacts = readFromJson();
    console.log("")
    console.log(`=== Search Results for "${name}" ===`)
    const arr = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
    if (arr.length > 0) {
        arr.forEach((contact, index) => {
            console.log(`${index + 1}.  ${contact.name} - ${contact.email} - ${contact.phone}`)
        })
    } else {
        console.log(`No contacts found matching "${name}"`)
    }
}

function addContact(name, email, phone) {

    validateEmail(email);
    const contacts = readFromJson();
    if (!contacts.some(c => c.email.toLowerCase() === email.toLowerCase())) {
        contacts.push({
            name: name,
            email: email,
            phone: phone
        });
        console.log(`✓ Contact added: ${name}`)
        saveToJson(contacts)
    }
    else {
        throw new Error('Contact with this email already exists')
    }
}


function deleteContact(email) {
    const contacts = readFromJson();
    const index = contacts.findIndex(c => c.email == email);
    let x = contacts.find(c => c.email === email);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`✓ Contact deleted: ${x.name}`);
        saveToJson(contacts)
    } else {
        console.log(`✗ Error: No contact found with email: ${email}`);
    }
}



module.exports = { listContact, searchContact, addContact, deleteContact }



