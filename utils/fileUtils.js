
const fs = require('fs');
const filePath = 'contacts.json';

const saveToJson = function (contact) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(contact, null, 2), 'utf-8');
        console.log("✓ Contacts saved to contacts.json")
    } catch {
        console.log("✗ Error: Failed to save contacts")

    }

}

const readFromJson = function () {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const contacts = JSON.parse(data);
        console.log(`✓ Loaded ${contacts.length} contacts`)
        return contacts;
    } catch (err) {
        console.log("✗ File not found - creating new contact list")
        return []
    }

}

module.exports = {saveToJson,readFromJson}