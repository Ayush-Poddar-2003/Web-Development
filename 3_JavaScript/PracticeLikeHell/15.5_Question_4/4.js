var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");

var ul = document.querySelector('ul');

add.addEventListener("click", function(){
    if(inp.value.trim() === ""){}
    else{
        var li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ""; //To empty the input text field
    }
})