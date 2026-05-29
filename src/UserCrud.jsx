
import { useState, useEffect } from "react"
import axios from "axios"
// API URL
const API_URL = "http://localhost:8000/api/users"
function UserCrud() {
  const [users, setUsers]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState("")
  // Form state
  const [formdata, setFormdata] = useState({
    name:  "",
    email: "",
    phone: "",
    city:  "",
  })
  // Edit state
  const [editId, setEditId]     = useState(null)
  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    fetchUsers()
  }, [])
  // GET all users
  async function fetchUsers() {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setUsers(response.data)
    } catch (err) {
      setError("Failed to fetch users")
    } finally {
      setLoading(false)
    }
  }
  // Handle input change
  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  // POST - Add new user
  async function addUser() {
    try {
      await axios.post(API_URL, formdata)
      fetchUsers()      // refresh list
      resetForm()
    } catch (err) {
      setError("Failed to add user")
    }
  }
  // PUT - Update user
  async function updateUser() {
    try {
      await axios.put(`${API_URL}/${editId}`, formdata)
      fetchUsers()      // refresh list
      resetForm()
    } catch (err) {
      setError("Failed to update user")
    }
  }
  // DELETE - Delete user
  async function deleteUser(id) {
    try {
      await axios.delete(`${API_URL}/${id}`)
      fetchUsers()      // refresh list
    } catch (err) {
      setError("Failed to delete user")
    }
  }
  // Set form for editing
  function handleEdit(user) {
    setEditId(user.id)
    setFormdata({
      name:  user.name,
      email: user.email,
      phone: user.phone,
      city:  user.city,
    })
    setShowForm(true)
  }
  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault()
    if (editId) {
      updateUser()   // update if editing
    } else {
      addUser()      // add if new
    }
  }
  // Reset form
  function resetForm() {
    setFormdata({ name: "", email: "", phone: "", city: "" })
    setEditId(null)
    setShowForm(false)
  }
  if (loading) return <h2>Loading... ⏳</h2>
  if (error)   return <h2>{error} ❌</h2>
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management 👥</h1>
      {/* Add User Button */}
      <button onClick={() => setShowForm(true)}>
        Add New User ➕
      </button>
      {/* Form */}
      {showForm && (
        <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
          <h2>{editId ? "Edit User ✏️" : "Add User ➕"}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name : </label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </div>
            <br/>
            <div>
              <label>Email : </label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </div>
            <br/>
            <div>
              <label>Phone : </label>
              <input
                type="text"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                required
              />
            </div>
            <br/>
            <div>
              <label>City : </label>
              <input
                type="text"
                name="city"
                value={formdata.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>
            <br/>
            <button type="submit">
              {editId ? "Update ✅" : "Add ✅"}
            </button>
            <button type="button" onClick={resetForm}>
              Cancel ❌
            </button>
          </form>
        </div>
      )}
      {/* Users Table */}
      <h2>All Users</h2>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>
                {/* Edit Button */}
                <button onClick={() => handleEdit(user)}>
                  Edit ✏️
                </button>
                {/* Delete Button */}
                <button onClick={() => deleteUser(user.id)}>
                  Delete 🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Users : {users.length}</p>
    </div>
  );
}
export default UserCrud;