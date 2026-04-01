import Product from "./Product"
import Price from "./Price";
function ProductTab(){
    let style = {
        display : "flex",
        flaxWrap : "wrap",
        justifyContent : "center",
        alignIteams : "center"

    }
    return(
        
    <div style={style}>
       
     <Product title="Tech Product" idx={0}/>
     <Product title="Ev product" idx = {1}/>
     <Product title = "Another product" idx ={2}/>
     <Product title = "fashion product" idx={3}/>
    </div>
    )
}
export default ProductTab;
