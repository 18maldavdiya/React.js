function Price({oldprice,newprice}){
    let style = {
        textDecorationLine : "line-through",
        color : "red" 
    }
    let style2 = {
        fontWeight : "bold"
    }
    let styles3 = {
        backgroundColor : "#e0c367",
        height : "30px",
        borderBottomLeftRadius : "15px",
        borderBottomRightRadius : "15px",

    }
    return(
        <div style = {styles3}>
            <span style={style}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={style2}>{newprice}</span>
        </div>
    )

}
export default Price;