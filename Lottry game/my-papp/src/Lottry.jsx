import { useState } from "react";
import "./Lottry.css";
import {genTicket} from "./helper";

function Lottry(){
    let [ticket, setTicket] = useState(genTicket(3));
    return(
        <div>
            <h2>Lottry Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    )
}
export default Lottry;