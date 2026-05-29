import { useState } from "react";

function Forms(){
    const [formdata ,setFormdata]=useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
});
const [submitted ,setSubmitted]=useState(false)
function handleChange(e){
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
    })
}
function handleSubmit(e) {
    e.preventDefault()   
    setSubmitted(true)
  }

function handleReset() {
    setFormdata({
      name:     "",
      email:    "",
      password: "",
      gender:   "",
      city:     "",
    })
    setSubmitted(false)
  }
  return (
    <div>
      <h1>Registration Form</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formdata.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email */}
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Password */}
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Gender */}
        <div>
          <label>Gender :</label>
          <select
            name="gender"
            value={formdata.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* City */}
        <div>
          <label>City :</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formdata.city}
            onChange={handleChange}
            required
          />
        </div>
        {/* Buttons */}
        <button type="submit">Submit ✅</button>
        <button type="button" onClick={handleReset}>Reset 🔄</button>
      </form>
      {/* Show submitted data */}
      {submitted && (
        <div>
          <h2>Submitted Details 📋</h2>
          <p>Name     : {formdata.name}</p>
          <p>Email    : {formdata.email}</p>
          <p>Password : {formdata.password}</p>
          <p>Gender   : {formdata.gender}</p>
          <p>City     : {formdata.city}</p>
        </div>
      )}
    </div>
  );
}
export default Forms;
