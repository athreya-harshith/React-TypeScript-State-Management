interface Props {
  items: string[];
  onClear: () => void;
}
const Cart = ({ items, onClear }: Props) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </div>
  );
};

export default Cart;
