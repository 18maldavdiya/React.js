function Curly() {

  const obj = {
    name: "hanish",
    age: 21,
    city: "Indore"
  };

  const userName = ["hanish", "rohan", "sachin", "Mohan"];

  function fruit(){
    const name = "hanish";
    let x = 20;
    let y = 30;
    let z = x + y;

    return "apple";
  }

  return (
    <div>
      <h1>{obj.name}</h1>
      <h2>{obj.age}</h2>
      <h3>{obj.city}</h3>
      <p>{fruit()}</p>
      <h1>{userName[0]}</h1>
    </div>
  );
}

export default Curly;