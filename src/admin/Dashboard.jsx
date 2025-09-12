import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name:'Jan', users:400, signups:240},
  {name:'Feb', users:300, signups:139},
  {name:'Mar', users:500, signups:380},
  {name:'Apr', users:478, signups:390},
  {name:'May', users:589, signups:480},
];

export default function Dashboard(){
  return (
    <div>
      <h3>Overview</h3>
      <div className="cards">
        <div className="card">
          <h4>Total Users</h4><div style={{fontSize:28}}>1,234</div>
        </div>
        <div className="card">
          <h4>Waitlist</h4><div style={{fontSize:28}}>{JSON.parse(localStorage.getItem('vulue_waitlist')||'[]').length}</div>
        </div>
        <div className="card">
          <h4>Admins</h4><div style={{fontSize:28}}>1</div>
        </div>
      </div>
      <div style={{height:300, background:'transparent', padding:12, borderRadius:12}}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#9aa4b2"/>
            <YAxis stroke="#9aa4b2"/>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)"/>
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
