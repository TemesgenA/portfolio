// function toggleMobileMenu(menu) {
//     menu.classList.toggle('open');
// }

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
