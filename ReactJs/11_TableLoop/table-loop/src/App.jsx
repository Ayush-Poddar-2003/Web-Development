function App(){

  const userData = [
    {
      name : 'Ayush',
      age : 22,
      email : "Ayush@gmail.com",
      id : 1
    },
    {
      name : 'Aditi',
      age : 21,
      email : "Aditi@gmail.com",
      id : 2
    },
    {
      name : 'Sonali',
      age : 22,
      email : "Sonali@gmail.com",
      id : 3
    }
  ]

  return(
    <div>

      <table border="1" margin="2" padding="2"> 
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default App;;