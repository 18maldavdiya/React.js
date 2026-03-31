function MassageBox({username,message}){
    let style = {color : message};
    return(
        <div>
            <h4 style = {style}>hellow {username}</h4>
            <p>{message}</p>
        </div>
    )
}
export default MassageBox;