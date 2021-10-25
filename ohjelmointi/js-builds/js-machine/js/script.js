document.body.id = "container";

let wrpHeader = document.createElement('header');
let wrpSection = document.createElement('section');
let wrpFooter = document.createElement('footer');

// Elem <h1>
let html_header_h1 = document.createElement('h1');
let html_header_p = document.createElement('p');
html_header_h1.innerText = "Hello World";
html_header_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.";

// Header content
wrpHeader.appendChild(html_header_h1);
wrpHeader.appendChild(html_header_p);

// Section Content
let html_section_p = document.createElement('p');
html_section_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi assumenda tenetur natus magnam architecto, enim a quia amet aut.";

// image create + Styles
let html_section_img = document.createElement('img');
html_section_img.src = "img/jsm.gif";
html_section_img.style.maxWidth = "400px"
html_section_img.style.float = "right";

// Append to section
wrpSection.appendChild(html_section_img);
wrpSection.appendChild(html_section_p);


//Header style
wrpHeader.style.border = "5px dotted black";
wrpHeader.style.padding = "30px";

// Section styles
wrpSection.style.border = "5px dotted black";
wrpSection.style.borderTop = "none";
wrpSection.style.padding = "30px";

// Footer Content
let html_footer_p = document.createElement("p");
html_footer_p.innerText = "@ Anton Semenov 2021";

// Append footer content
wrpFooter.appendChild(html_footer_p);

// Footer styles
wrpFooter.style.border = "5px dotted black";
wrpFooter.style.borderTop = "none";
wrpFooter.style.padding = "10px";

// Appends to body tag
document.body.appendChild(wrpHeader);
document.body.appendChild(wrpSection);
document.body.appendChild(wrpFooter);
