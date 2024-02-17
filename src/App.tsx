import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink, // incase if the object has many properties then we can do like this
      price: 10,
    };
    setDrink(newDrink);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>The Price of drink is {drink.price}</p>
    </div>
  );
}
export default App;
