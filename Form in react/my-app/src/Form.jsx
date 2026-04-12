import { useState } from "react";
import "./App.css";

function Form(){
    // let [fulName ,setFulNaame] = useState("");
    // let [userName ,setUserNaame] = useState("");
    let [formdata,setFormData] = useState({
        fulName: "",
        userName: "",
        password: ""
    });

    // let handleNameChange = (event) =>{
    //     setFulNaame(event.target.value);
    // }
    //  let handleUsername = (event) =>{
    //     setUserNaame(event.target.value);
    // }
    let handleInputChange = (event) =>{
        setFormData((currData) =>{
        return { ...currData,[event.target.name]:event.target.value};
        })
      
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fulName: "",
            userName: "",
            password: ""
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
            <br></br>
            <br></br>
            <lable htmlFor="password">Enter Password</lable>
            <input type="text" placeholder="Enter your full name" 
            value={formdata.password} 
            id="password"
            name="password"
            onChange={handleInputChange}
            />
            
            <button>Submit</button>
        </form>
    )
}
export default Form;