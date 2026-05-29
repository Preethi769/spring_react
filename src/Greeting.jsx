
//this is child component
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old</p>
      <p>You live in {props.city}</p>
    </div>
  );
}