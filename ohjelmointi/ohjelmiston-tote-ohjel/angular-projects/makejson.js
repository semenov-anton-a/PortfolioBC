const directory = '.';
const path = require('path');
const fs = require('fs');
const { json } = require('stream/consumers');

let dirNamesArr = [];

fs.readdir(directory, (err, files) => {
    let count = 0;
    files.forEach(file => {
        if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
            dirNamesArr.push(file);
        } else {
            // THIS FILE
            //   console.log('File: ' + file);
        }
        
        count++;
        
        if( count == files.length ){
            // console.log( JSON.stringify(dirNamesArr) );
            // console.log( JSON.stringify(Object.assign({},dirNamesArr)) );
            
            let jsonStr = JSON.stringify( Object.assign({},dirNamesArr) );
            // let jsonStr = JSON.stringify(dirNamesArr);
            
            let jsonFile = jsonStr;
            fs.writeFileSync('folders.json', jsonFile);


        }

    });

});

// function
