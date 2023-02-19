import React from "react"
import SearchBar from "../Components/Home/SearchBar"
import Navbar from "../Components/Navbar"
import axios from "axios"
import AllGrants from "../Components/Home/AllGrants"

export default function Home() {
  const [search, setSearch] = React.useState("")
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Navbar />
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <AllGrants searchInput={search} />
    </div>
  )
}
