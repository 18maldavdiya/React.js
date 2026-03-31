import Product from "./Product"
import Price from "./Price";
function ProductTab(){
    return(
    <>
     <Product title="Tech Product" idx={0}/>
     <Product title="Ev product" idx = {1}/>
     <Product title = "Another product" idx ={2}/>
     <Product title = "fashion product" idx={3}/>
    </>
    )
}
export default ProductTab;
