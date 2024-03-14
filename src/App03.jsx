import { useState } from "react";
import Posts from "./components/Posts";

const App = () => {
  const [reloadKey, setReload] = useState(false);
  const handleReload = () => {
    setReload(new Date().getTime());
  }
  
  return (
   <>
    <button onClick={handleReload}>Reload</button>
    <Posts reloadKey={reloadKey}/>
   </>
  );
}

export default App;
