const readline = require('readline-sync');
const fs = require('fs');
let user = fs.readFileSync('book.json','utf8');
let data = JSON.parse(user);
class AddresBook {

    addDetails = () =>{
       
    //    let obj =  this.display();
    //    console.log(obj);
       let fName = readline.question('Enter your First Name:') ;
       //person { FirstName:fName };
       let lName = readline.question('Enter your Last Name:');
       //person["LastName"] = lName;
       let addr = readline.question('Enter your address:');
       //person["Address"] = addr;
       let zip = readline.question('Enter your Zip Code:');
       //person["Zip"] = zip;
       let city = readline.question('Enter your city name:');
       //person["City"] = city;
       let state = readline.question('Enter your state name:');
       //person["State"] = state;
       let phone = readline.question('Enter your phone number:');
       //person["Phone"] = phone;
       let person = {FirstName:fName,
                    Lastname:lName,
                    Address:addr,
                    Zip:zip,
                    City:city,
                    State:state,
                    Phone:phone};
       data['AddressBookArray'].push(person);
       fs.writeFileSync('book.json',JSON.stringify(data));
    }
    display = ()=>{
        let temp = {};
        temp =data;
        console.log(temp['AddressBookArray']);
        //  object = user.AddressBookArray;
        //  return object; 
    }
    deleteDetails = ()=>{
        let input = readline.question('Enter the phone number of record you want to delete:');
        let temp = [];
        temp =data['AddressBookArray'];
        let index = temp.map(function(item){return item.Phone}).indexOf(input);
        data['AddressBookArray'].splice(index,1);
    }
    editDetails = ()=>{
        let input = readline.question('Enter the phone number of record you want to edit:');
        let temp = [];
        temp =data['AddressBookArray'];
        let index = temp.map(function(item){return item.Phone}).indexOf(input);
        data['AddressBookArray'].splice(index,1,this.addDetails());
    }
}
module.exports = new AddresBook();