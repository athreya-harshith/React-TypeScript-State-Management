import { useState } from "react";
// import { produce } from "immer";
import Cart from "./Cart";
import NavBar from "./NavBar";
function App() {
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const [customer, setCustomer] = useState({
  //   name: "athreya",
  //   address: {
  //     city: "Bengaluru",
  //     zipCode: 560098,
  //   },
  // });
  // const [tags, setTags] = useState(["happy ", "cheerful"]);
  // const [bugs, setBug] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const handleClick = () => {
  //   // const newDrink = {
  //   //   ...drink, // incase if the object has many properties then we can do like this
  //   //   price: 10,
  //   // };
  //   // setDrink(newDrink);
  //   // setCustomer({
  //   //   ...customer,
  //   //   address: {
  //   //     ...customer.address,
  //   //     zipCode: 571401,
  //   //   },
  //   // });
  //   // Managing the State of an Array
  //   // Adding the elements
  //   // setTags([...tags, "excited"]);
  //   //removing the elements
  //   // setTags(tags.filter((tag) => tag !== "happy")); // returns true for all except the happy
  //   //updating
  //   // setTags(tags.map((tag) => (tag === "happy" ? "happyness" : tag)));
  //   //updating array of objects
  //   // setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  //   //updating array of objects using the immer
  //   // setBug(
  //   //   produce((draft) => {
  //   //     let bug = draft.find((bug) => bug.id === 1);
  //   //     if (bug) bug.fixed = true;
  //   //   })
  //   // );
  // };

  // let bugTitle = bugs[0].fixed ? "Fixed Bug " : "Not fixed";

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  function clearCart() {
    setCartItems([]);
  }
  return (
    <div>
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))} */}
      {/* <button onClick={handleClick}>Click</button> */}
      <NavBar itemCount={cartItems.length} />
      <Cart items={cartItems} onClear={clearCart}></Cart>
    </div>
  );
}
export default App;
