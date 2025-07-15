const {readFromJson , saveToJson} = require("../utils/fileUtils");



function listContact(){
     const contacts = readFromJson();
    if(contacts.length ===0){
        console.log("=== is Empty ===")
    }else{
          console.log("=== All Contacts ===")
         contacts.forEach((contact , index) => {
                         console.log(`${index +1}.  ${contact.name} - ${contact.email} - ${contact.phone}`)
          })
        }
}



function searchContact(name){
            const contacts = readFromJson();
            console.log(`=== Search Results for "${name}" ===`)
             const arr =contacts.filter(contact=> contact.name === name);
              if(arr.length > 0){
                arr.forEach((contact,index) =>{
                    console.log(`${index +1}.  ${contact.name} - ${contact.email} - ${contact.phone}`)
                })
              }else{
              console.log(`No contacts found matching "${name}"`)
            }
        }

function addContant(name ,email,phone ){
    const contacts = readFromJson();
    contacts.push({ 
        name: name, 
        email: email, 
        phone: phone 
    });
    saveToJson(contacts)
    console.log(`✓ Contact added: ${name}`)

}


function deleteContact(email) {
    const contacts = readFromJson();
    const index = contacts.findIndex(c => c.email == email);
    let x = contacts.find(c=>c.email === email);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`✓ Contact deleted: ${x.name}`);
    } else {
        console.log(`✗ Error: No contact found with email: ${x.email}`);
    }
    saveToJson(contacts)
}



module.exports = {listContact,searchContact,addContant,deleteContact}



