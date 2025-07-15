
let contacts = [ 

             {
                name: "John Doe",
                email: "amichdy@gmail,com",
                phone: "123-456-7890"
            },

            {
                name: "Jane33333 Smith",
                email: "amichdddddddy@gmsdsdil,fdfm",
                phone: "987-654-3210",

            },
             {
                name: "Jane Smith",
                email: "amichfdfdy@gmdsssdl,fdfm",
                phone: "987-654-3210",

            },
             {
                name: "Jane Smith",
                email: "amichdy@sddsgmail,fdfm",
                phone: "987-654-3210",

            }

]


function listContact(){
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
            // const contacts = readFromJson();
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
    
//  validationEmail(email);
//  validationPhone(phone);
    contacts.push({ 
        name: name, 
        email: email, 
        phone: phone 
    });
    console.log(`✓ Contact added: ${name}`)
}


function deleteContact(email) {
    const index = contacts.findIndex(c => c.email == email);
    let x = contacts.find(c=>c.email === email);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`✓ Contact deleted: ${x.name}`);
    } else {
        console.log(`✗ Error: No contact found with email: ${x.email}`);
    }
}


 searchContact("bb");
deleteContact("amichfdfdy@gmdsssdl,fdfm")






