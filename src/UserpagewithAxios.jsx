import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function UserpagewithAxios(){
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")

    useEffect(()=>{
        fetchUsers()
    },[])
function fetchUsers(){
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)    // 👈 axios gives response.data
        setLoading(false)
      })
      .catch((err) => {
        setError("Failed to fetch data")
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
  return(
    <div>
      <h1>Users List 👥</h1>
      <p>Total Users : {users.length}</p>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        {/* Table Head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserpagewithAxios;

