import { useState } from "react";
import "./App.css";

function Form(){
    let [fulName ,setFulNaame] = useState("");
    let [userName ,setUserNaame] = useState("");

    let handleNameChange = (event) =>{
        setFulNaame(event.target.value);
    }
     let handleUsername = (event) =>{
        setUserNaame(event.target.value);
    }
    return (
        
        <form>
            
            <lable htmlFor="fullname">Full Name</lable>
            <input type="text" placeholder="Enter your full name" 
            value={fulName} 
            onChange={handleNameChange}
            id="fullname"
            />
            <br></br>
            <br></br>
            <lable htmlFor="username">User name</lable>
            <input type="text" placeholder="Enter your full name" 
            value={userName} 
            onChange={handleUsername}
            id="username"
            />
            
            <button>Submit</button>
        </form>
    )
}
export default Form;