import { useState } from "react";
import "./Lottry.css";
import {genTicket,sum} from "./helper";

function Lottry(){
    let [ticket, setTicket] = useState(genTicket(3));
    let iswinning  = sum(ticket) ===15;
    let buyTicket = () =>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h2>Lottry Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{iswinning && "you won !"}</h3>
        </div>
        
    )
}
export default Lottry;