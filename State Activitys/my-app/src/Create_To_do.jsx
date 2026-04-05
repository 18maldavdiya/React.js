import { useState } from "react";
function Create_To_do(){
    let [todos,setTodos] = useState(["sample to do"]);
    return(
        <div>
            <input placeholder="Add a task"></input>
             <br></br>
            <button>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Take todo</h3>
            <ul>
                {
                    
                }

            </ul>
        </div>
    )
}
export default Create_To_do;