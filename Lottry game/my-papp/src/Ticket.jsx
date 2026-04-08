import TicketNum from "./TicketNum"

function Ticket({ ticket }) {
    return (
        <div>
            {ticket.map((nums, idx) => (
                <TicketNum nums={nums} key={idx} />
            ))}
        </div>
    )
}

export default Ticket;