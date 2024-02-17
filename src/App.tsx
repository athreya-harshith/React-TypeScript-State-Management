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
  const [tags, setTags] = useState(["happy ", "cheerful"]);

  const handleClick = () => {
    // const newDrink = {
    //   ...drink, // incase if the object has many properties then we can do like this
    //   price: 10,
    // };
    // setDrink(newDrink);
    // setCustomer({
    //   ...customer,
    //   address: {
    //     ...customer.address,
    //     zipCode: 571401,
    //   },
    // });

    // Managing the State of an Array
    // Adding the elements
    // setTags([...tags, "excited"]);
    //removing the elements

    // setTags(tags.filter((tag) => tag !== "happy")); // returns true for all except the happy
    //updating

    setTags(tags.map((tag) => (tag === "happy" ? "happyness" : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {tags.length === 0 && <p>No items</p>}
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
    </div>
  );
}
export default App;
