import path from 'path';
// const path=require('path');
import Space from 'space'

// console.log("My path name >>>" + __dirname);


function pathParse() {
    const pathParse = path.parse(__dirname);
    console.log(pathParse);
}
// Creating a Space Object
var person = new Space('name John')
// Accessing a property    
console.log(person.get('name'))
// Setting a property
person.set('age', 29)
// Printing the object
console.log(person.toString())

module.exports = pathParse;