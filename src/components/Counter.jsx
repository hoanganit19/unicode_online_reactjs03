import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Effect", count);
    return () => {
      console.log("Cleanup", count);
    };
  }, [count]);
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmount");
    };
  }, []);
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

/*
Thứ tự hoạt động trong useEffect
1. State thay đổi
2. Compoent re-render
3. Update UI
4. Cleanup của lần trước (Nếu có) 
5. Callback useEffect
*/
