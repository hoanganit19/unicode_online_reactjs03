import { useEffect, useState } from "react"
import config from "../../config.json";
const {SERVER_API} = config;

export default function Input() {
  const [form, setForm] = useState({
    user: '',
    message: ''
  });
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {user, message} = form;
    if (!user || !message) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (user !== currentUser) {
      localStorage.setItem('chat_user', user);
    }
    sendMessage(form);

  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  const sendMessage = async (data) => {
    const response = await fetch(`${SERVER_API}/messages`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      alert('Gửi tin nhắn bị lỗi');
      return;
    }
    setForm({...form, message: ''});
  }
  useEffect(() => {
    if (localStorage.getItem('chat_user') ) {
      setCurrentUser(localStorage.getItem('chat_user'));
      setForm({...form, user: localStorage.getItem('chat_user')})
    }
  }, []);
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Tên của bạn..." name="user"
             onChange={handleChange} defaultValue={currentUser}/>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Tin nhắn..." name="message"  onChange={handleChange} value={form.message}/>
            <button className="btn btn-primary">Gửi</button>
        </div>
    </form>
  )
}
