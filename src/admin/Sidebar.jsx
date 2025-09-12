import React from "react";
export default function Sidebar({route,setRoute}){
  return (
    <aside className="sidebar">
      <div className="brand"><img src="../assets/logo.png" alt="logo" style={{height:36}}/><strong>VULUE</strong></div>
      <nav>
        <div className={'side-link '+(route==='dashboard'?'active':'')} onClick={()=>setRoute('dashboard')}>Dashboard</div>
        <div className={'side-link '+(route==='waitlist'?'active':'')} onClick={()=>setRoute('waitlist')}>Waitlist</div>
        <div className={'side-link '+(route==='admins'?'active':'')} onClick={()=>setRoute('admins')}>Admins</div>
        <div className={'side-link '+(route==='settings'?'active':'')} onClick={()=>setRoute('settings')}>Settings</div>
      </nav>
    </aside>
  );
}
