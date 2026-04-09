import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";

function Lottry({n,winningSum}){
    let [ticket, setTicket] = useState(genTicket(n));
    let iswinning  = sum(ticket) ===winningSum;
    let buyTicket = () =>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h2>Lottry Game</h2>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{iswinning && "you won !"}</h3>
        </div>
        
    )
}
export default Lottry;