import axios from "axios"
import React from "react"

export default function Researchers() {
  const [researchers, setResearchers] = React.useState([])
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/predict/1")
      .then((res) => {
        console.log(res.data)
        setResearchers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {researchers.map((researcher, index) => (
        <div key={index}>
          <h1>{researcher.research_area}</h1>
          <p>{researcher.eligible}</p>
        </div>
      ))}
    </div>
  )
}
