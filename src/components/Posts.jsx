import { useEffect } from "react";
import { useState } from "react";

const Posts = ({reloadKey}) => {
  //State lưu kết quả sau khi API trả về
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setTimeout(() => {
        setPosts(data);
        setLoading(false);
    }, 1000)
  };
//   const handleReload = () => {
//     // setLoading(true);
//     getPosts();
//   }
//   useEffect(() => {
//     getPosts();
//   }, []);
  useEffect(() => {
    getPosts();
    return () => {
        setLoading(true);
    }
  }, [reloadKey])
 
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

export default Posts;
