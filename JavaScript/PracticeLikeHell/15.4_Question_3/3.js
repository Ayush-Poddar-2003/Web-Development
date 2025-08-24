/* Since we are dealing with form,
as soon as we click submit, 
pages refreshes before js runs
hence js is u*/

var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1")
// var inp2 = document.querySelector("#inp2")
var inps = document.querySelectorAll("input[type='text']");

var err = document.querySelector("h1");


form.addEventListener("submit", function(ev){
    ev.preventDefault(); //this will stop from refreshing
    
    // if(inp1.value === "" || inp2.value === ""){
    //     err.textContent = "ERROR, Some fields are empty";
    //     err.style.color = "red";
    // }
    
    // //This wont work if last if filled as it checks for every element
    // inps.forEach(function(el){
    //     if(el.value===''){
    //         err.textContent = "Fill Complete Form";
    //         err.style.color = "Red";
    //     }
    //     else{
    //         err.textContent = "";
    //     }
    // })

    for(var i=0; i<inps.length; i++){
        if(inps[i].value.trim() === ""){
            err.textContent = "Fill Complete Form";
            err.style.color = "Red";
            break;
        }
    }

})