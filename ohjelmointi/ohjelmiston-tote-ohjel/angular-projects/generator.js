
const path = require('path');
const fs = require('fs');
const { json } = require('stream/consumers');

const MyGenerator = {
    baseUrlForProject : "/PortfolioBC/ohjelmointi/ohjelmiston-tote-ohjel/angular-projects/",
    count: 0,
    directory : '.',
    dirNamesArr : [],

    //
    //
    //
    fileReplase : function( fileName, replace, regexpFind ){
        let newCss = '';
        
        let file = fs.createReadStream(fileName, 'utf8');
        
        file.on('data', function (chunk) {
            newCss += chunk.toString().replace(regexpFind, replace);
        });
    
        file.on('end', function () {
            fs.writeFile(fileName, newCss, function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    // console.log('.gitignore Updated!');
                }
            });
        });
    },
    //
    //
    //
    changeBaseUrlByProject : async function( projectName ){
        fs.readdir( projectName + "/", (err, files) => {
            files.forEach(currentDir => {
                if ( fs.lstatSync(path.resolve(projectName, currentDir)).isDirectory() ) 
                {
                    if( currentDir == "dist" )
                    {
                        let indexHTML = projectName + "/dist/" + projectName + "/index.html";
                        
                        let path = this.baseUrlForProject + projectName + '/dist/' + projectName;
                        let replace = '<base href="'+path+'">';                       
                        
                        
                        this.fileReplase( indexHTML, replace,  /(\<base.+)/gm);

                        console.log( projectName + " baseUrl Updated. ");
                        console.log(  replace );
                        return true;

                    }

                    return 

                } else {}
            });
        });
    },
    // 
    // updateGitignore
    // 
    updateGitignore : async function( projectName ){
        let fileName = projectName + "\\.gitignore";
        let regexpFind = /(\/dist)|(#\/dist)/g;
        let replace = "#/dist";
        this.fileReplase( fileName, replace, regexpFind );
        console.log( projectName + " gitignore Updated. ");
        
    },
    // 
    // INIT
    // 
    init: function () {
        fs.readdir(this.directory, (err, files) => {
            let count = 0;
            files.forEach(currentDir => {
                if ( fs.lstatSync(path.resolve(this.directory, currentDir)).isDirectory() ) {
                   
                    this.changeBaseUrlByProject(currentDir)
                    this.updateGitignore(currentDir);
                    this.dirNamesArr.push(currentDir); 
                    
                } else {
                    // THIS FILE
                    // console.log('File: ' + file);
                }

                count++;
                
                if( count == files.length ){
                    let jsonStr = JSON.stringify( Object.assign({}, this.dirNamesArr ) );
                    let jsonFile = jsonStr;
                    fs.writeFileSync('folders.json', jsonFile);
                }
            });

        });

    },
};

MyGenerator.init();