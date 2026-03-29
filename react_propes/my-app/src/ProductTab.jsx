import Product from "./Product"
function ProductTab(){
    let features = ["hi -tech" , "good-quality" ,"best in range"]
    return(
    <>
     <Product title = "phone" price = {10000} features={features}/>
     <Product title = "laptop" price = {200000} features ={features}/>
     
    </>
    )
}
export default ProductTab;