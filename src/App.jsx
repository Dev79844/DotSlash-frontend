import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Profile from "./Pages/Profile"
import Home from "./Pages/Home"
import Researchers from "./Pages/Researchers"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/researchers" element={<Researchers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
