import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/SideBar/Sidebar";

import Dashboard from "./Dashboard";

const Authenticated = () => {
  return (
    <>
      <div className='dashboard'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Authenticated;
