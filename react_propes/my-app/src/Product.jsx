import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrice = ["12,495","11,999","9,999","2,499"];
  let newPrice = ["10,999","9,999","8,499","1,999"];
  let Description =[" 8.000DIP","intutive surface","iPad pro","wirless" ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx]}</p>
      <Price oldPrice={oldPrice [idx]} newPrice={newPrice [idx]}/>
    </div>
  );
}

export default Product;