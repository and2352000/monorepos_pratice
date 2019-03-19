import path from 'path';

console.log("My path name >>>" + __dirname);


function pathParse() {
    const pathParse = path.parse(__dirname);
    console.log(pathParse);
}

module.exports = pathParse;