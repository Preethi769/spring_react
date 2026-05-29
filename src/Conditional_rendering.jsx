import { useState } from 'react'
function Conditional_rendering() {
//simple if else 
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   return (
//     <div>
//       <h1>Conditional Rendering</h1>
//       {/* Show different content based on isLoggedIn */}
//       {isLoggedIn ? (
//         <h2>Welcome Back! 👋</h2>
//       ) : (
//         <h2>Please Login! 🔒</h2>
//       )}
//       {/* Toggle Button */}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );

//show or hide 
// const [show, setShow] = useState(false)
//   return (
//     <div>
//       <h1>Show Hide Example</h1>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide Message" : "Show Message"}
//       </button>
//       {/* Only shows when show is true */}
//       {show && (
//         <div>
//           <h2>Hello! I am visible now 😊</h2>
//           <p>You clicked the button!</p>
//         </div>
//       )}
//     </div>
//   );

//mutiple conditions 
// const [status, setStatus] = useState("")
//   return (
//     <div>
//       <h1>Traffic Light 🚦</h1>
//       {/* Buttons */}
//       <button onClick={() => setStatus("red")}>Red</button>
//       <button onClick={() => setStatus("yellow")}>Yellow</button>
//       <button onClick={() => setStatus("green")}>Green</button>
//       {/* Conditions */}
//       {status === "red" && (
//         <h2 style={{ color: "red" }}>🔴 STOP!</h2>
//       )}
//       {status === "yellow" && (
//         <h2 style={{ color: "orange" }}>🟡 GET READY!</h2>
//       )}
//       {status === "green" && (
//         <h2 style={{ color: "green" }}>🟢 GO!</h2>
//       )}
//       {status === "" && (
//         <h2>Click a button above 👆</h2>
//       )}
//     </div>
//   );

//grade example 
// const [marks, setMarks] = useState(0)
//   // function to get grade
//   function getGrade() {
//     if (marks >= 90) return "A Grade 🏆"
//     else if (marks >= 80) return "B Grade 😊"
//     else if (marks >= 70) return "C Grade 👍"
//     else if (marks >= 60) return "D Grade 😐"
//     else return "Fail ❌"
//   }
//   return (
//     <div>
//       <h1>Grade Calculator</h1>
//       <input
//         type="number"
//         placeholder="Enter marks"
//         onChange={(e) => setMarks(e.target.value)}
//       />
//       <h2>Grade : {getGrade()}</h2>
//     </div>
//   );

//loading example 
const [loading, setLoading] = useState(false)
  const [data, setData]       = useState("")
  function handleLoad() {
    setLoading(true)   // show loading
    // simulate loading after 2 seconds
    setTimeout(() => {
      setLoading(false)         // hide loading
      setData("Data Loaded! ✅") // show data
    }, 2000)
  }
  return (
    <div>
      <h1>Loading Example</h1>
      <button onClick={handleLoad}>
        Load Data
      </button>
      {/* Show loading */}
      {loading && <h2>Loading... ⏳</h2>}
      {/* Show data */}
      {data && <h2>{data}</h2>}
    </div>
  );
}
export default Conditional_rendering;