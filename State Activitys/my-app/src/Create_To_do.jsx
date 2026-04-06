import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Create_To_do(){
    let [todos,setTodos] = useState([{task:"sample-task",id: uuidv4()}]);
    let [newTodo,setNewTodo] = useState("");

   let addnewTodo = () =>{
    setTodos((prevTodos) =>{
        return [...prevTodos,{task:newTodo,id:uuidv4()}];
    })
    setNewTodo("");
}
    let updatetodo = (event) =>{
        setNewTodo(event.target.value);
    }
    let deleatTodo = (id)=>{
       setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));

    }
    

    return(
        <div>
            <input placeholder="Add a task" value ={newTodo}onChange={updatetodo}></input>
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
                       <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleatTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }

            </ul>
            <br></br>
            <br></br>
        </div>
    )
}
export default Create_To_do;