import { useState } from "react";
function Create_To_do(){
    let [todos,setTodos] = useState(["sample to do"]);
    let [newTodo,setNewTodo] = useState("");

    let addnewTodo = () =>{
        console.log("Add new task in todo");
    }
    let updatetodo = (event) =>{
        console.log(event.target);
    }
    return(
        <div>
            <input placeholder="Add a task" value={newTodo}></input>
             <br></br>
            <button onClick={addnewTodo}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Take todo</h3>
            <ul>
                {
                    todos.map((todo) =>(
                       <li>{todo}</li>
                    ))
                }

            </ul>
        </div>
    )
}
export default Create_To_do;