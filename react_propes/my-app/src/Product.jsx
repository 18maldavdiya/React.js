import "./Product.css";

function Product({title, price,features}) {
  
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h2>price : {price}</h2>
      {/* <ul>{features.map((feature) => <li>{feature}</li>)}</ul> */}
    </div>
  );
}

export default Product;