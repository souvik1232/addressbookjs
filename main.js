// { "arrayname":[{ objcets}]}
console.log("Welcome to Address Book");
const readline = require('readline-sync');
const { editDetails } = require('./utility');
const address = require('./utility');
let ans;
do {
    console.log(
        "\n1.Add Details:\n",
        "2.Display Details:\n",
        "3.Delete Details:\n",
        "4.Edit Details:\n",
        "5.Sort by First Name");
    let input = readline.questionInt('Enter your choice->');
    console.log(input);
    switch (input) {
        case 1:
            address.addDetails();
            break;
        case 2:
            address.display();
            break;
        case 3:
            address.deleteDetails();
            break;
        case 4:
            address.editDetails();
            break;
        case 5:
            address.sortDetailsByName();
            break;
        default:
            break;  
    }
    ans = readline.question('Do you want to continue?(Y/N)->') 
}while (ans == 'Y' || ans == 'y');