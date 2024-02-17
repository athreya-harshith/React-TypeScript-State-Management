// import { useState } from "react";
import ExpandableText from "./ExpandableText";
// import { produce } from "immer";
// import Cart from "./Cart";
// import NavBar from "./NavBar";
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

  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  // function clearCart() {
  //   setCartItems([]);
  // }
  return (
    <div>
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))} */}
      {/* <button onClick={handleClick}>Click</button> */}
      {/* <NavBar itemCount={cartItems.length} />
      <Cart items={cartItems} onClear={clearCart}></Cart> */}
      <ExpandableText maxChars={50}>
        Hello world Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda saepe illum, odit sed delectus eos adipisci odio dolorum amet
        nam maxime accusantium soluta quisquam. Nisi eligendi expedita quidem
        dignissimos. Et laboriosam obcaecati repellendus maxime vero placeat
        dolorem sint natus aut! Numquam incidunt quas maiores aperiam et vitae
        distinctio similique recusandae, illum ex libero consectetur quaerat
        consequuntur maxime nihil! Praesentium quas repellendus a nostrum, vitae
        exercitationem neque, illum voluptates facilis numquam dolor unde nulla
        tempore quod minima dolores, deserunt nemo dignissimos consequatur. Esse
        assumenda voluptatibus vero facilis explicabo, eligendi cumque libero
        vitae laudantium adipisci quis et blanditiis voluptas officia, atque
        porro doloribus excepturi temporibus odit veniam tempore amet. Ratione,
        quidem! Eum praesentium soluta laborum vitae, et cum corporis beatae
        porro quas nisi neque aspernatur inventore excepturi distinctio quasi
        deserunt minus veritatis, iure nulla tempora. Saepe esse corrupti
        suscipit, a laudantium nulla atque earum distinctio ducimus error magnam
        et dolorum impedit magni soluta placeat consectetur? Nam aut, neque
        quaerat cumque iusto illo ducimus ipsum et, dicta accusamus sunt ipsa
        in, quasi expedita! Quae et iste mollitia quos animi amet consequuntur!
        Mollitia commodi, maiores modi suscipit debitis harum quo beatae
        molestias repudiandae pariatur? Laborum et necessitatibus dolores sint
        dolore incidunt dicta, quo, labore impedit voluptate temporibus.
        Laboriosam ducimus incidunt earum ipsum deserunt laudantium autem
        exercitationem ullam ipsam mollitia, porro ad est cum unde harum at ea
        omnis odio eum numquam velit accusamus vero quidem saepe. Eius nostrum
        ut laborum dolorum eos aliquid necessitatibus quia explicabo delectus
        minima adipisci, consequuntur, dolores ipsa! Labore soluta aperiam nemo
        alias, molestiae iste a provident sunt nostrum assumenda, et,
        perspiciatis in dolores corporis. Quia culpa vero quis perspiciatis,
        dignissimos perferendis quos quidem ipsa assumenda repellat, nesciunt
        corporis accusamus commodi odit debitis iusto doloremque blanditiis
        fugit? Unde, dolorem illum consequuntur assumenda iste ipsam aspernatur
        rerum! Perspiciatis nemo magni recusandae dolor aliquam architecto ipsum
        nostrum quisquam saepe obcaecati itaque fugit dolorum sequi pariatur
        iste quod quo doloribus fuga, veritatis cupiditate tempora quis illo!
        Magnam, ipsa similique optio odio ea natus ratione molestiae aliquid.
        Voluptatum ullam unde sapiente illum? Ducimus delectus nulla numquam
        amet! Qui nam perspiciatis aliquid quis consequuntur sunt commodi quasi
        eaque error. Excepturi, eveniet voluptatem reprehenderit asperiores
        distinctio facilis tempora illum nostrum cumque voluptatum. Doloribus
        illum voluptates recusandae modi omnis asperiores sunt perspiciatis
        aliquam dignissimos! Distinctio a illum cum dolor expedita rerum
        consequatur debitis? Optio voluptates pariatur voluptate repudiandae, in
        eligendi tenetur, architecto, qui commodi ipsa suscipit aliquid libero
        voluptas ut aspernatur! Dolorem facere laborum exercitationem fugit
        inventore maxime consectetur alias veritatis eaque accusamus, beatae
        possimus magni commodi qui deleniti ad aperiam provident hic recusandae
        iure tenetur quo voluptate laudantium. Dicta, asperiores. Deserunt
        aspernatur doloremque sapiente expedita eligendi. Quaerat illum non odio
        obcaecati ratione et necessitatibus, quo eaque inventore aperiam
        excepturi ullam saepe natus itaque unde velit, animi assumenda deleniti.
        Eum velit expedita aspernatur, nostrum iste eveniet consequuntur aperiam
        minus atque dolores quis fugiat pariatur id, dicta natus tempora sit
        optio animi ratione porro sed similique. Dolorem totam officia sapiente
        itaque earum? Totam ea ut deleniti quaerat temporibus?
      </ExpandableText>
    </div>
  );
}
export default App;
