import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "athreya",
    address: {
      city: "Bengaluru",
      zipCode: 560098,
    },
  });
  const handleClick = () => {
    // const newDrink = {
    //   ...drink, // incase if the object has many properties then we can do like this
    //   price: 10,
    // };
    // setDrink(newDrink);
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 571401,
      },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {/* <p>The Price of drink is {drink.price}</p> */}
      <p>The Zip code updated is {customer.address.zipCode}</p>
    </div>
  );
}
export default App;
