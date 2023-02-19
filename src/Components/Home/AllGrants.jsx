import axios from "axios"
import React from "react"

export default function AllGrants(props) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [grants, setGrants] = React.useState([])

  React.useEffect(() => {
    setIsLoading(true)
    axios
      .get("http://localhost:3000/api/v1/allgrants")
      .then((res) => {
        setIsLoading(false)
        const randomNum = Math.floor(Math.random() * 100)
        setGrants(res.data.slice(randomNum, randomNum + 50))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const filteredData = grants.filter((grant) => {
    if (props.searchInput === "") {
      return grant
    } else if (
      grant.researchArea.toLowerCase().includes(props.searchInput.toLowerCase())
    ) {
      return grant
    }
  })

  const allGrants =
    filteredData &&
    filteredData.map((grant) => (
      <div key={grant.schemeId} className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
          <h1 className="title-font sm:text-2xl text-center text-xl font-bold text-gray-900 mb-3">
            {grant.researchArea}
          </h1>
          <div>
            <span className="font-medium text-lg text-black">
              Eligibility Critera:
            </span>
            <p className="leading-relaxed mb-3">{grant.eligible}</p>
          </div>

          <div>
            <span className="font-medium text-lg text-black">
              Application Deadline:
            </span>
            <p className="leading-relaxed mb-3">{grant.appDead}</p>
          </div>
          <div>
            <span className="font-medium text-lg text-black">
              Grant Amount:
            </span>
            <p className="leading-relaxed mb-3">{grant.grantAmt}</p>
          </div>
          <div>
            <span className="font-medium text-lg text-black">
              Projects Funded:
            </span>
            <span className="leading-relaxed mb-3 ml-2">{grant.noAppFund}</span>
          </div>
        </div>
      </div>
    ))

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-600 h-12 w-12 mb-4"></div>
        <h1 className="text-4xl font-medium">Loading....</h1>
      </div>
    )
  } else {
    return (
      <section className="text-gray-600 body-font px-12">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{allGrants}</div>
        </div>
      </section>
    )
  }
}
