import { useState } from "react";

function Form(){
    let [fulName ,setFulNaame] = useState("hanish");

    let handleNameChange = (event) =>{
        setFulNaame(event.target.value);
    }
    return (
        
        <form>
            <lable htmlFor="username">Full Name</lable>
            <input type="text" placeholder="Enter your full name" 
            value={fulName} 
            onChange={handleNameChange}
            id="username"
            />
            <button>Submit</button>
        </form>
    )
}
export default Form;