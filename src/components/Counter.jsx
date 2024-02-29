import { useEffect, useState } from "react";

let a = 0;
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    if (count >= 4 && count <= 9) {
      a++;
    }
  };
  useEffect(() => {
    console.log("Effect", count);
  }, [a]);
  return (
    <div>
      <h1>Count: {count}</h1>
      {console.log("Render", count)}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

//Mount, Unmount
