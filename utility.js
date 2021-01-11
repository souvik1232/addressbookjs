const readline = require('readline-sync');
const fs = require('fs');
class AddresBook {
    person = {};
    addDetails = () =>{
       let fName = readline.question('Enter your First Name:') ;
       this.person["FirstName"] = fName;
       let lName = readline.question('Enter your Last Name:');
       this.person["LastName"] = lName;
       let addr = readline.question('Enter your address:');
       this.person["Address"] = addr;
       let zip = readline.question('Enter your Zip Code:');
       this.person["Zip"] = zip;
       let city = readline.question('Enter your city name:');
       this.person["City"] = city;
       let state = readline.question('Enter your state name:');
       this.person["State"] = state;
       let phone = readline.question('Enter your phone number:');
       this.person["Phone"] = phone;
       let data = (JSON.stringify(this.person)).concat("\n");
       fs.writeFileSync('book.json',data,{encoding:"utf8",flag:"a"});
    }
    display = ()=>{
       fs.readFile('book.json','utf8',(err,data) => {
           console.log(data);
       }); 
    }
}
module.exports = new AddresBook();