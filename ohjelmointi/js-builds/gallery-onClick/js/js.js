function loadImg(elem){
    let wrp = document.getElementById('wrpImg');
    
    for(let i = 0; i < wrp.childNodes.length; i++) {
        if( wrp.childNodes[i].nodeName == 'IMG' ){
            wrp.removeChild(wrp.childNodes[i]);
        }
    }

    let elemImage = document.createElement('img');
    elemImage.setAttribute('src', elem.getAttribute("href"));
    
    // Append image
    wrp.appendChild(elemImage);

    // Append title
    let title = document.getElementById("imgTitle");
    title.innerText = elem.getAttribute("data-text");
}