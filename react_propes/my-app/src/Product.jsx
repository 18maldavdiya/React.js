import "./Product.css";

function Product({title, price,features}) {
  
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h2>price : {price}</h2>
      <p>{features}</p>
    </div>
  );
}

export default Product;