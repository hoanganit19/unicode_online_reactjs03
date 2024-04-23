import { useEffect, useState } from "react"
import config from "../../config.json";
const {SERVER_API} = config;
export default function Message() {
  const [messages, setMessages] = useState([]);
  const scrollBottom = () => {
    const messagesEl = document.querySelector('.messages');
    const messageHeight = messagesEl.scrollHeight;
    messagesEl.scroll(0, messageHeight);
  }
  const getMessages = async () => {
    const response = await fetch(`${SERVER_API}/messages`);
    const data = await response.json();
    setMessages(data);
    scrollBottom();
  }
  useEffect(() => {
    setTimeout(() => {
        getMessages();
    }, 1000);
  }, [messages]);

  
  return (
    <div className="messages border p-3" style={{
        height: '300px',
        overflow: "auto"
    }}>
        {
            messages.map(({id, message, user}) => <div key={id} className="mb-3">
            <div className="bg-primary text-white p-2">
                {message}
            </div>
            <span className="fs-6 fst-italic">{user}</span>
        </div>)
        }
        
    </div>
  )
}
