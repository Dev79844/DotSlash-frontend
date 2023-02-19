import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Profile from "./Pages/Profile"
import Home from "./Pages/Home"
import Recommend from "./Pages/Recommend"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
