import { useState } from "react";

function Events(){
    //input change event.
//     const [text, setText] = useState("")
//   function handleChange(e) {
//     setText(e.target.value)   
//   }
//   return (
//     <div>
//       <h1>Type Something</h1>
//       <input
//         type="text"
//         placeholder="Type here..."
//         onChange={handleChange}
//       />
//       <h2>You typed : {text}</h2>
//     </div>
//   );

//mouse event

// const [message, setMessage] = useState("")
//   return (
//     <div>
//       <h1>Mouse Events</h1>
//       {/* Mouse Enter */}
//       <button onMouseEnter={() => setMessage("Mouse is ON button!")}>
//         Hover Me
//       </button>
//       {/* Mouse Leave */}
//       <button onMouseLeave={() => setMessage("Mouse LEFT button!")}>
//         Move Away
//       </button>
//       {/* Double Click */}
//       <button onDoubleClick={() => setMessage("Double Clicked!")}>
//         Double Click Me
//       </button>
//       <h2>{message}</h2>
//     </div>
//   );

//form submit event 
const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()   // 👈 stops page from refreshing
    setSubmitted(true)
  }
  return (
    <div>
      <h1>Form Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <h2>Hello, {name}! 👋</h2>}
    </div>
  );
}
export default Events;
