import "./Product.css";
import Price from "./Price";
function Product({title}) {
  let oldPrice = ["1000" , "20,254", "4500", "45'620"];
  let newPrice = ["800" , "15,000", "4000", "40'000"]; 
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>Description</p>
      <Price oldprice={oldPrice[0]} newprice={newPrice[0]} />
    </div>
  );
}

export default Product;