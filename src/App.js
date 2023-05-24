import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(() => number + 1);
  };
  const decrease = () => {
    setNumber(() => number - 1);
  };
  return (
    <div className="App">
      <span>{number}</span>
      <button onClick={increment}>arttır</button>

      <button onClick={decrease}>azalt</button>
    </div>
  );
}

export default App;
