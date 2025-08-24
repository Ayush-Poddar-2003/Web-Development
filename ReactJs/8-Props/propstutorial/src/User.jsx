// function User(param) {
//     return (
//         <div>

//             <h1>{param.name}</h1>
//             <h1>{param.age}</h1>

//         </div>
//     )
// }


/* OR
function User( {name, age} ) {
    return (
        <div>

            <h1>{name}</h1>
            <h1>{age}</h1>

        </div>
    )
}*/

//DEFAULT PARAMETER
function User( {name="Ayush"}){
    return (
        <>
            <h1>Hii {name}</h1>
        </>
    )
}

export default User