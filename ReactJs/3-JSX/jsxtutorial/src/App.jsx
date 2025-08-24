// function Welcome(){
//     const user = "Ayush";
//     return(
//         <>
//             <h3>I am {user}</h3>
//             <h3>Sum of 10+20={10+20}</h3>
            
//             <button onClick = {()=>alert("Clicked")}>CLick Me</button>
//         </>
//     )
// }
// export default Welcome


//without jsx normal html and js
// import { createElement } from "react";

// function Welcome(){
//   return createElement("div", {id: "rootDiv"}, "I am Div");
// }
// export default Welcome

//Above code in html and js
import { createElement, Fragment } from "react";

function Welcome() {
  const user = "Ayush";

  return createElement(
    Fragment,
    null,
    createElement("h3", null, `I am ${user}`),
    createElement("h3", null, `Sum of 10+20=${10 + 20}`),
    createElement(
      "button",
      { onClick: () => alert("Clicked") },
      "Click Me"
    )
  );
}

export default Welcome;
