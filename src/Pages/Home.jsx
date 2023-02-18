import React from "react"
import Cards from "../Components/Home/Cards"
import SearchBar from "../Components/Home/SearchBar"
import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards />
    </div>
  )
}
