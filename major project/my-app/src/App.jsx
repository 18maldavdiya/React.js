import Button from '@mui/material/Button';
import './App.css'

function App() {
  let handleCilck = () => {
    alert("button clicked");
  }
  return (
    <>
      <h1>Material UI</h1>
      <Button variant="contained" onClick ={handleCilck}>Click me!</Button>
      <Button variant="contained" onClick ={handleCilck} color="error">Error</Button>
    </>
  )
}

export default App
