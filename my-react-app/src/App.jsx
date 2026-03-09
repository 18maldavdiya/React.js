import UserComponent from "./UserComponent"
function App() {
  return (
    <div>
      <UserComponent />
      <h1>List of fruits</h1>
      <Fruit></Fruit>
      <h1>list of colors</h1>
      <Color></Color>
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
