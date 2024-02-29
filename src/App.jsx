import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const handleClick = () => {
    setTitle("Hello anh em");
    console.log(1);
  };
  useEffect(() => {
    if (title) {
      document.title = title;
      console.log(2);
    }
  });
  return (
    <div>
      <h1>useEffect</h1>
      {console.log(3)}
      <h2>{title}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
