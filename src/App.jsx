import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}