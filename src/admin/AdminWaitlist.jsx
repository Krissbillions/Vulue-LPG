import React, {useEffect, useState} from "react";

export default function AdminWaitlist(){
  const [list, setList] = useState([]);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('vulue_waitlist')||'[]');
    setList(data.reverse());
  },[]);
  return (
    <div>
      <h3>Waitlist</h3>
      <div className="table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>When</th></tr></thead>
          <tbody>
            {list.map((r,i)=>(
              <tr key={i}><td>{r.firstName} {r.surname}</td><td>{r.email}</td><td>{new Date(r.createdAt).toLocaleString()}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
