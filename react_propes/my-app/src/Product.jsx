import "./Product.css";

function Product({title, price,features}) {
  let isDiscounted = price >30000;
  let styles = { backgroundColor: isDiscounted ? "yellow" : "white" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h2>price : {price}</h2>
      {isDiscounted ? <p>"Descount of 5%"</p> : <a href="/discount">Get discount</a>}
      {/* <ul>{features.map((feature) => <li>{feature}</li>)}</ul> */}
    </div>
  );
}

export default Product;