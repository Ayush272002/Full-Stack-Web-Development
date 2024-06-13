// ------------------  Example 1 (IF) ------------------
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) return <ValidPassword />;
  else return <InvalidPassword />;
};

// ------------------  Example 2 (&&) ------------------
const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodies"];

  return (
    <>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} in your cart</h2>}

      <ul>
        <h4>Products</h4>
        {items.map((item, index) => (
          <li key={item.id || index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

function App() {
  return (
    <>
      <Password isValid={true} />
      <Password isValid={false} />
      <Cart />
    </>
  );
}

export default App;
