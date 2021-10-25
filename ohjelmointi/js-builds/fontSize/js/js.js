let fontSizeClickCounter = 0;
function changeFontSize(){
    let container = document.getElementById("pFonts");

    let elem = container.children[fontSizeClickCounter];
    let fsize = elem.getAttribute("data-fsize");
    elem.style.fontSize = fsize+"px";

    let sizeInfo = document.createElement("span");
    sizeInfo.innerText = fsize+"px";
    elem.appendChild(sizeInfo);
    
    fontSizeClickCounter++;

    if( container.childElementCount == fontSizeClickCounter ){
        let baseCont = document.getElementById("container fontSize");
        let elem = baseCont.children[baseCont.childElementCount-1];
        elem.setAttribute('disabled', 'disabled');
    }
}

let fontStyleClickCounter = 0;
function changeFontStyle(){
    let container = document.getElementById("pStyles");

    let elem = container.children[fontStyleClickCounter];
    let fstyle = elem.getAttribute("data-fstyle");
    elem.style.fontFamily = fstyle;

    let sizeInfo = document.createElement("span");
    sizeInfo.innerText = " "+fstyle;
    elem.appendChild(sizeInfo);
    
    fontStyleClickCounter++;

    if( container.childElementCount == fontStyleClickCounter ){
        let baseCont = document.getElementById("container fontStyle");
        let elem = baseCont.children[baseCont.childElementCount-1];
        elem.setAttribute('disabled', 'disabled');
    }
}