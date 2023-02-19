import React from "react"
import Cards from "../Components/Home/Cards"
import SearchBar from "../Components/Home/SearchBar"
import Navbar from "../Components/Navbar"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Recommend() {
  const [grants, setGrants] = React.useState([])
  const handleRecommend = () => {
    console.log("clicked")
    axios
      .get("http://127.0.0.1:5000/predict/5")
      .then((res) => {
        console.log(res.data)
        setGrants(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    handleRecommend()
  }, [])
  const [search, setSearch] = React.useState("")
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Navbar />
      <SearchBar
        handleRecommend={handleRecommend}
        search={search}
        handleSearch={handleSearch}
      />
      <Cards grants={grants} searchInput={search} />
    </div>
  )
}
