import { useState } from "react";
import { useEffect } from "react";
function Userpage(){
    const[users,setUsers]=useState([])
    const[loading ,setLoading]=useState(true)
    const[error,setError]=useState("")

    useEffect(() => {
    fetchUsers()
  }, []) 

  function fetchUsers() {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())   // convert to json
      .then((data) => {
        setUsers(data)                        // save data
        setLoading(false)                     // hide loading
      })
      .catch((err) => {
        setError("Failed to fetch data")      // show error
        setLoading(false)
      })
  }

// Show loading
  if (loading) {
    return <h2>Loading... ⏳</h2>
  }
  // Show error
  if (error) {
    return <h2>{error} ❌</h2>
  }
  // Show users
  return (
    <div>
      <h1>Users List 👥</h1>
      <p>Total Users : {users.length}</p>
      <hr/>
      {users.map((user) => (
        <div key={user.id}>
          <h3>Name  : {user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
          <p>City  : {user.address.city}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default Userpage;