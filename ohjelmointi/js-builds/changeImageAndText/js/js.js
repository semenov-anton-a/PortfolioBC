let elemButton = document.getElementById('btn');
let title = document.getElementById('title');
let container = document.getElementById('container');
let logo = document.getElementById('logo');
let userNameState;

// Change user by button click
elemButton.addEventListener('click', function(){
    var thisBtn = this;
    thisBtn = thisBtn.style.display = "none";
    // Show input form
    let inputUserNameWrp = document.getElementById('username');
    inputUserNameWrp.style.display = "block";
    
    // Click event to change user
    let inputUserBtn = document.getElementById('username');
    
    inputUserBtn = inputUserBtn.children[1];

    inputUserBtn.addEventListener('click', function(){
        let userName = inputUserNameWrp.querySelector('input').value;
        logo.children[0].setAttribute('src', 'img/firefox.png');
        userNameState = "Mozilla is cool, "  +  userName
        title.innerHTML = userNameState;

        inputUserNameWrp.style.display = "none";
        elemButton.style.display = "block";        
    });
});



logo.addEventListener("mouseenter", function(){
    title.innerHTML = "Hello World !";
    let container = document.getElementById('container');
});

logo.addEventListener("mouseleave", function(){
    if( userNameState != undefined ){
        title.innerHTML = userNameState;
    }else{
        title.innerHTML = "Hello World !";
    }
});

let btnNextBrowser = document.getElementById('btnNextBrowser');

// Cliock to next browser
btnNextBrowser.addEventListener("click", function(){
    container.style.backgroundColor = "white";
    
    title.innerHTML = "Is Brave even Cooler";
    logo.children[0].setAttribute('src', 'img/brave.png');
});
