import { useState } from "react"
import config from "../../config.json";
const {SERVER_API} = config;
export default function Input() {
  const [form, setForm] = useState({
    user: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const {user, message} = form;
    if (!user || !message) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
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
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Tên của bạn..." name="user"
             onChange={handleChange}/>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Tin nhắn..." name="message"  onChange={handleChange} value={form.message}/>
            <button className="btn btn-primary">Gửi</button>
        </div>
    </form>
  )
}
