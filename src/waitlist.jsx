import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function Waitlist(){
  const [firstName,setFirstName]=useState('');
  const [surname,setSurname]=useState('');
  const [email,setEmail]=useState('');
  const nav = useNavigate();
  const handle = (e)=>{ e.preventDefault();
    const entry = {firstName,surname,email,createdAt:new Date().toISOString()};
    const list = JSON.parse(localStorage.getItem('vulue_waitlist')||'[]');
    list.push(entry);
    localStorage.setItem('vulue_waitlist', JSON.stringify(list));
    const endpoint = window.__VULUE_WAITLIST_ENDPOINT || '';
    if(endpoint){
      fetch(endpoint, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)})
        .then(r=>r.json()).then(()=>{}).catch(()=>{});
    }
    alert(`Thank you ${firstName} ${surname}, you've joined the waitlist.`);
    setFirstName(''); setSurname(''); setEmail(''); nav('/');
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Join Our Wait-list</h2>
        <form onSubmit={handle}>
          <input className="input" type="text" placeholder="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
          <input className="input" type="text" placeholder="Surname" value={surname} onChange={e=>setSurname(e.target.value)} required />
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <button className="btn" type="submit" style={{width:'100%'}}>Join Waitlist</button>
        </form>
      </div>
    </div>
  );
}
