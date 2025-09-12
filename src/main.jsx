import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Waitlist from "./Waitlist";
import AdminRoot from "./admin/AdminRoot";
import "./index.css";

function RequireAdmin({children}){
  const isAdmin = localStorage.getItem('vulue_admin')==='true';
  return isAdmin ? children : <Navigate to="/login" replace />;
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/waitlist' element={<Waitlist/>} />
        <Route path='/admin/*' element={
          <RequireAdmin>
            <AdminRoot />
          </RequireAdmin>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
