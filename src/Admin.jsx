import React from "react";
import { useNavigate } from "react-router-dom";
export default function Admin(){
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("vulue_admin")||"null");
  if(!admin) {
    navigate("/login");
    return null;
  }
  function addAdmin(){
    const email = prompt("Enter email to grant admin access:");
    const pwd = prompt("Enter a temporary password for this admin:");
    if(!email || !pwd) return;
    const key = "vulue_admins_override";
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.push({email,password:pwd});
    localStorage.setItem(key, JSON.stringify(arr));
    alert("Admin granted locally. This persists in browser only.");
  }
  function logout(){
    localStorage.removeItem("vulue_admin");
    navigate("/");
  }
  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {admin.email}</p>
      <button onClick={addAdmin}>Grant Admin Access</button>
      <button onClick={logout}>Logout</button>
      <div className="admin-info">
        <h4>Wait-list submissions (local)</h4>
        <pre>{JSON.stringify(JSON.parse(localStorage.getItem("vulue_waitlist")||"[]"), null, 2)}</pre>
      </div>
    </div>
  );
}