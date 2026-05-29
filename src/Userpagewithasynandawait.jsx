
import { useState, useEffect } from "react"
import axios from "axios"
function Userpagewithasyncandawait() {
  const [users, setUsers]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState("")
  useEffect(() => {
    fetchUsers()
  }, [])
  async function fetchUsers() {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:3001/users")
      setUsers(response.data)
    } catch (err) {
      setError("Failed to fetch data ❌")
    } finally {
      setLoading(false)
    }
  }
  if (loading) return <h2>Loading... ⏳</h2>
  if (error)   return <h2>{error}</h2>
  return (
    <div>
      <h1>Users List 👥</h1>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>     {/* ✅ Fixed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Userpagewithasyncandawait;