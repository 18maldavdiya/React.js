import TicketNum from "./TicketNum"
import "./Ticket.css";

function Ticket({ ticket }) {
    return (
       
        <div className="Ticket">
             <p>Ticket</p>
            {ticket.map((nums, idx) => (
                <TicketNum nums={nums} key={idx} />
            ))}
        </div>
    )
}

export default Ticket;