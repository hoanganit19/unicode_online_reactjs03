import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  //State lưu kết quả sau khi API trả về
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>Call API useState + useEffect</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
};

export default App;
