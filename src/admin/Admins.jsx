import React from "react";

export default function Admins(){
  const admins = [{email:'admin@vulue.com', name:'Super Admin'}];
  return (
    <div>
      <h3>Admins</h3>
      <div className="table">
        <table>
          <thead><tr><th>Name</th><th>Email</th></tr></thead>
          <tbody>
            {admins.map((a,i)=>(<tr key={i}><td>{a.name}</td><td>{a.email}</td></tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
