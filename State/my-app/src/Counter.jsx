import {useState} from 'react';
function Counter(){
   let arr =  useState(0); 
   console.log(arr);
    return(
        <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </div>
    )
}

export default Counter;