import "./Product.css";
import Price from "./Price";
function Product({title, idx}) {
  let oldPrice = ["1000" , "20,254", "4500", "45'620"];
  let newPrice = ["800" , "15,000", "4000", "40'000"]; 
  let description = ["Lorem ipsum dolor", "sit amet consectetur", "adipisicing elit.", "Voluptas, voluptate."];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx]}</p>
      <Price oldprice={oldPrice[idx]} newprice={newPrice[idx]} />
    </div>
  );
}

export default Product;