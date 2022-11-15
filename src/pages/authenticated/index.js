import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBar from "../../components/SideBar";

import Dashboard from "./Dashboard";

const Authenticated = () => {
  return (
    <>
      <div className='dashboard'>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Authenticated;
