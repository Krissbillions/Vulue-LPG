import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Waitlist(){
  const [first,setFirst]=useState("");
  const [last,setLast]=useState("");
  const [email,setEmail]=useState("");
  const [done,setDone]=useState(false);
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("vulue_waitlist")||"[]");
    list.push({first,last,email,ts:Date.now()});
    localStorage.setItem("vulue_waitlist", JSON.stringify(list));
    setDone(true);
  }
  return (
    <div className="waitlist-page">
      {!done ? (
        <form onSubmit={handleSubmit} className="waitlist-form">
          <h2>Join our wait-list</h2>
          <input placeholder="First name" value={first} onChange={e=>setFirst(e.target.value)} required />
          <input placeholder="Last name" value={last} onChange={e=>setLast(e.target.value)} required />
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <button type="submit" className="confirm-btn">Join wait-list</button>
        </form>
      ) : (
        <div className="thank-you">
          <h3>Thank you — you have been added to the wait-list.</h3>
          <button onClick={()=>navigate("/")}>Return Home</button>
        </div>
      )}
    </div>
  );
}