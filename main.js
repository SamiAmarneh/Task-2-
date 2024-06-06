var ChangeFontSize = document.querySelector("div");
var changeSizeBtn = document.querySelector(".change_size");


function inflat_font(){
    ChangeFontSize.classList.toggle("font");
}

changeSizeBtn.onclick = inflat_font ; 

