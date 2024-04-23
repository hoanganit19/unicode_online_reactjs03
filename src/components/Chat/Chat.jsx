import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./Message";
import Input from "./Input";

export default function Chat() {
  return (
    <div className="w-50 mx-auto">
        <h2>Chatbox</h2>
        <Message />
        <Input />
    </div>
  )
}
