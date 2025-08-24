import { useEffect } from "react"
import { useState } from "react";

function App() {
 
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    getUserData();
  },[])

  async function getUserData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    
    setUserData(response.users);
  }
  
  console.log(userData);

  return (
    <div>
      <h1>Fetching Data from API</h1>
      {
        userData && userData.map((user)=>(
          <ul>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default App
