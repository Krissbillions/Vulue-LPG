import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const nav = useNavigate();
  const adminEmail = "admin@vulue.com";
  const adminPassword = "Vulue@123";
  const handle = (e)=>{ e.preventDefault(); 
    if(email.trim().toLowerCase()===adminEmail && password===adminPassword){
      localStorage.setItem('vulue_admin','true');
      alert('Welcome Admin — Access granted.');
      nav('/admin');
    } else {
      alert('You are not an admin. Redirecting to waitlist.');
      nav('/waitlist');
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="prompt">Login to Join our Wait-list</p>
        <form onSubmit={handle}>
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn" type="submit" style={{width:'100%'}}>Confirm</button>
        </form>
      </div>
    </div>
  );
}
