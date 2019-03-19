import path from 'path';


function pathParse() {
    const pathParse = path.parse(__dirname);
    console.log(pathParse);
}

module.exports = pathParse;