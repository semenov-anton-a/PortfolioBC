const directory = '.';
const path = require('path');
const fs = require('fs');
const { json } = require('stream/consumers');

let dirNamesArr = [];


const fileUpdate = {
    count : 0,
    init : function ( dirProject ){

    },
};

function searchReplaceFile(regexpFind, replace, cssFileName) {
    var file = fs.createReadStream(cssFileName, 'utf8');
    var newCss = '';

    file.on('data', function (chunk) {
        newCss += chunk.toString().replace(regexpFind, replace);
    });

    file.on('end', function () {
        fs.writeFile(cssFileName, newCss, function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log('.gitignore Updated!');
            }
        });
    });
}



const fileReader = function (dir) {
    let filePath = dir + "\\.gitignore";
    searchReplaceFile(/\/dist/g, '#/dist', filePath);
};



/** 
 *  FOLDERS TO JSON
*/
fs.readdir(directory, (err, files) => {
    let count = 0;
    files.forEach(currentDir => {
        if (fs.lstatSync(path.resolve(directory, currentDir)).isDirectory()) {

            fileReader(currentDir);
            dirNamesArr.push(currentDir);


            // console.log(currentDir)

        } else {
            // THIS FILE
            //   console.log('File: ' + file);
        }

        count++;

        // if( count == files.length ){
        //     // console.log( JSON.stringify(dirNamesArr) );
        //     // console.log( JSON.stringify(Object.assign({},dirNamesArr)) );

        //     let jsonStr = JSON.stringify( Object.assign({},dirNamesArr) );
        //     // let jsonStr = JSON.stringify(dirNamesArr);

        //     let jsonFile = jsonStr;
        //     fs.writeFileSync('folders.json', jsonFile);
        // }
    });

});

// function
