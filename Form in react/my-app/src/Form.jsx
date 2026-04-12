import { useState } from "react";
import "./App.css";

function Form(){
    // let [fulName ,setFulNaame] = useState("");
    // let [userName ,setUserNaame] = useState("");
    let [formdata,setFormData] = useState({
        fulName: "",
        userName: ""
    });

    // let handleNameChange = (event) =>{
    //     setFulNaame(event.target.value);
    // }
    //  let handleUsername = (event) =>{
    //     setUserNaame(event.target.value);
    // }
    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currData) =>{
        return { ...currData,[fieldName]:newValue};
        })
      
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fulName: "",
            userName: "",
        });
    }

    return (
        
        <form onSubmit={handleSubmit}>
            
            <lable htmlFor="fullname">Full Name</lable>
            <input type="text" placeholder="Enter your full name" 
            value={formdata.fulName} 
            id="fullname"
            name="fulName"
            onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <lable htmlFor="username">User name</lable>
            <input type="text" placeholder="Enter your full name" 
            value={formdata.userName} 
            id="username"
            name="userName"
            onChange={handleInputChange}
            />
            
            <button>Submit</button>
        </form>
    )
}
export default Form;