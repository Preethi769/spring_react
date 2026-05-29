
import { useState } from "react"
function LoginForm() {
  const [formdata, setFormdata] = useState({
    email:    "",
    password: "",
  })
  const [errors, setErrors]           = useState({})
  const [isLoggedIn, setIsLoggedIn]   = useState(false)
  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  function validate() {
    let newErrors = {}
    if (formdata.email === "") {
      newErrors.email = "Email is required"
    } else if (!formdata.email.includes("@")) {
      newErrors.email = "Enter valid email"
    }
    if (formdata.password === "") {
      newErrors.password = "Password is required"
    } else if (formdata.password.length < 6) {
      newErrors.password = "Password must be 6 characters"
    }
    return newErrors
  }
  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) {
      setIsLoggedIn(true)
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }
  function handleLogout() {
    setIsLoggedIn(false)
    setFormdata({
      email:    "",
      password: "",
    })
  }
  // Show after login
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome! 👋</h1>
        <p>Logged in as : {formdata.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  // Show login form
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={formdata.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        </div>
        <br/>
        {/* Password */}
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formdata.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
        </div>
        <br/>
        {/* Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;