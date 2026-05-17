const textarea = document.getElementById("message");

const counter = document.getElementById("counter");

const warning = document.getElementById("warning");

const maxLength = 200;

textarea.addEventListener("input", function(){

    let textLength = textarea.value.length;

    // Prevent typing above limit

    if(textLength > maxLength){

        textarea.value =
        textarea.value.substring(0, maxLength);

        textLength = maxLength;

        warning.textContent =
        "Character limit reached";

    }

    else{
        warning.textContent = "";
    }

    counter.textContent =
    `${textLength}/${maxLength} characters`;

});