function Price({oldprice,newprice}){
    let style = {
        textDecorationLine : "line-through",
        color : "red" 
    }
    let style2 = {
        fontWeight : "bold"
    }
    let styles3 = {
        justifyContent : "center",
        display : "flex",
        texxtAlign : "center",
        backgroundColor : "#e0c367",
        width : "200px",
        height : "30px",
        borderBottomLeftRadius : "20px",
        borderBottomRightRadius : "20px",

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