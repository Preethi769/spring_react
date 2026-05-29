// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Counterapp from './Counterapp'
// import Events from './Events'
// import Conditional_rendering from './Conditional_rendering'
// import Listmapping from './Listmapping'
// import Forms from './Forms'
// import LoginForm from './Loginform'
// // function App() {
// //   const [show, setShow] = useState(false);
// //   const fruits = ["Apple", "Banana", "Orange", "Mango"];

// //   return (
// //     <div>
         
// //       {/* <button onClick={() => setMessage("Hello Customers!")}>
// //         Click to Print
// //       </button> */}
// //       <button  onClick={() => setShow(true)}> Click Me to get list of fruits</button>

// //       {/* <h1>{message}</h1>
// //       <h1>Fruit List</h1>
// //       <ul>
// //         {fruits.map((fruit, index) => (
// //           <li key={index}>{fruit}</li>
// //         ))}
// //       </ul> */}

// //       {show && (
// //         <div>
// //           <h1>Hello Customers!</h1>
// //           <h2>Fruit List</h2>
// //           <ul>
// //             {fruits.map((fruit, index) => (
// //               <li key={index}>{fruit}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // //this is parent component
// // function Greeting(props) {
// //   return (
// //     <div>
// //       <h1>Hello, {props.name}!</h1>
// //       <p>You are {props.age} years old</p>
// //       <p>You live in {props.city}</p>
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <div>
//       {/* Passing data as props
//       <Greeting name="John" age={25} city="New York" />
//       <Greeting name="Sara" age={22} city="London" />
//       <Greeting name="Mike" age={30} city="Paris" />
//       <Counterapp/>
//       <Events/>
//       <Conditional_rendering/>
//       <Listmapping/>
//       <Forms/> */}
//       <LoginForm/>
//     </div>
//   );
// }
// export default App;
// App.jsx
//import LoginForm from './LoginForm' 
//import Userpage from "./Userpage";
//import UserpagewithAxios from "./UserpagewithAxios";
//import Userpagewithasyncandawait from "./Userpagewithasynandawait";
import UserCrud from "./UserCrud";
function App() {
  return (
    <div>
      <UserCrud/>
    </div>
  );
}
export default App;