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
  const [bugs, setBug] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
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
    // setTags(tags.map((tag) => (tag === "happy" ? "happyness" : tag)));
    setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  let bugTitle = bugs[0].fixed ? "Fixed Bug " : "Not fixed";
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Bug 1 Status : {bugTitle}</p>
    </div>
  );
}
export default App;
