let firstSection, secondSection, thirdSection;

firstSection = document.getElementById("first");
secondSection = document.getElementById("second");
thirdSection = document.getElementById("third");


let ulList = firstSection.querySelector("ul");
ulList.style.display = "flex";
ulList.style.listStyleType = "none";

ulList.querySelectorAll("ul").forEach(elem=>{
    elem.style.backgroundColor = "gray";
    elem.style.marginRight = "10px";
});

function getIconElement( className, color, padding = "0 10px" ) {
    let iconElem = document.createElement('i');
        iconElem.style.padding = padding;
        iconElem.className = className;
        iconElem.style.color = color;
    return iconElem;
}

ulList.querySelectorAll('a').forEach(function(elem){

    elem.style.textDecoration = "dotted"
    elem.style.borderStyle = "dotted"
    elem.style.borderTop = "none"
    elem.style.borderLeft= "none"
    elem.style.borderRight= "none"
    elem.style.fontStyle = "italic";
    elem.style.fontWeight = "bold";
    elem.style.color = "darkred";

    if( elem.getAttribute('href').indexOf("http") >= 0 ){
        elem.before( 
            getIconElement('fas fa-external-link-alt', 'green', "0 3px 0 0"), 
        );
    }

    if( elem.getAttribute('href').indexOf("mailto") >= 0 ){
        elem.before( 
            getIconElement('fas fa-external-link-alt', 'green', "0 0px"), 
            getIconElement('fa fa-envelope', 'red') 
        );
    }
    
    if( elem.getAttribute('href').indexOf(".pdf") >= 0 ){
        elem.after( 
            getIconElement('far fa-file-pdf', 'red'), 
        );
    }

});

let firstTable = secondSection.querySelectorAll("table tr");
firstTable.forEach(function( elem, key ){
    if( key != 0 && key % 2 == 0 ){
        elem.style.backgroundColor = "gray"
    }
});

let secondTable = thirdSection.querySelectorAll("table tr");
secondTable.forEach(function( elem, key ){
    if( key != 0 && key % 2 == 1 ){
        elem.style.backgroundColor = "gray"
    }
});

