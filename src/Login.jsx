import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import admins from "./admins.json";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    const found = admins.find(a=>a.email.toLowerCase()===email.toLowerCase() && a.password===password);
    // also check local override admins from localStorage
    const local = JSON.parse(localStorage.getItem("vulue_admins_override")||"[]");
    const foundLocal = local.find(a=>a.email.toLowerCase()===email.toLowerCase() && a.password===password);
    if(found || foundLocal){
      localStorage.setItem("vulue_admin", JSON.stringify({email}));
      navigate("/admin");
    } else {
      navigate("/waitlist");
    }
  }
  return (
    <div className="login-page">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="input-wrap">
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
        <label className="input-wrap">
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </label>
        <button className="confirm-btn" type="submit">Confirm</button>
      </form>
    </div>
  );
}