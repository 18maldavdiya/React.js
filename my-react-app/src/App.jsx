import Login , {Profile,Setting} from "./UserComponent"

function App() {
  return (
    <div>
      <Login />
      <Profile />
      <Setting></Setting>
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
