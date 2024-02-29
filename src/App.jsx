import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Counter />}
    </div>
  );
};

export default App;
