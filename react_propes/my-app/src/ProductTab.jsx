import Product from "./Product"
function ProductTab(){
    let features = [<li>hi -tech</li>, <li>good-quality</li>, <li>best in range</li>]
    return(
    <>
     <Product title = "phone" price = {10000} features={features}/>
     <Product title = "laptop" price = {200000} features ={features}/>
     
    </>
    )
}
export default ProductTab;