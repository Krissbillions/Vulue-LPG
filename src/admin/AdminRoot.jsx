import React, {useState} from "react";
import Dashboard from "./Dashboard";
import AdminWaitlist from "./AdminWaitlist";
import Admins from "./Admins";
import Settings from "./Settings";
import Sidebar from "./Sidebar";

export default function AdminRoot(){
  const [route, setRoute] = useState('dashboard');
  return (
    <div className="admin-root">
      <Sidebar route={route} setRoute={setRoute} />
      <div className="admin-main">
        {route==='dashboard' && <Dashboard />}
        {route==='waitlist' && <AdminWaitlist />}
        {route==='admins' && <Admins />}
        {route==='settings' && <Settings />}
      </div>
    </div>
  );
}
