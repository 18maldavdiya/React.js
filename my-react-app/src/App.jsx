import Login , {Profile,Setting} from "./UserComponent"
import Todo from "./ToDo"
import Curly from "./Curly"



function App() {
  function callFun(){
    alert("fun is called");
  }
  return (
    <div>
      <h1>Event call</h1>
      <button onClick={callFun}>Click me</button>
    </div>
     
  )
}
function Fruit(){
  return(
    <div>
      <h1>Apple</h1>
      <h2>Mango</h2>
    </div>
  )
}
function Color(){
  return(
    <div>
      <h1>Red</h1>
      <h2>Yellow</h2>
    </div>
    
  )
}

export default App
