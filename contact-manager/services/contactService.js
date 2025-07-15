
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
                name: "Jane3 Smith",
                email: "amichfdfdy@gmdsssdl,fdfm",
                phone: "987-654-3210",

            },
             {
                name: "Jane33 Smith",
                email: "amichdy@sddsgmail,fdfm",
                phone: "987-654-3210",

            }

]


function listContact(){

   


}


function addContant(name ,email,phone ){
    console.log("Loading contacts from contacts.json...")
//  validationEmail(email);
//  validationPhone(phone);
    contacts.push({ 
        name: name, 
        email: email, 
        phone: phone 
    });
}


function deleteContact(email) {
    const index = contacts.findIndex(c => c.email == email);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Contact deleted successfully");
    } else {
        console.log("Contact not found");
    }
}
contacts.forEach(c => console.log(c));
addContant("amis","amich11111dy@gmsdsdil,fdfm","938439893");
contacts.forEach(c => console.log(c));


