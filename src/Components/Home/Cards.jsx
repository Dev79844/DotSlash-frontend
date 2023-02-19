import React from "react"

export default function Cards(props) {
  const filteredData = props.grants.filter((grant) => {
    if (props.searchInput === "") {
      return grant
    } else if (
      grant.research_area
        .toLowerCase()
        .includes(props.searchInput.toLowerCase())
    ) {
      return grant
    }
  })

  const allGrants =
    filteredData &&
    filteredData.map((grant) => (
      <div key={grant.scheme_id} className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
          <h1 className="title-font sm:text-2xl text-center text-xl font-bold text-gray-900 mb-3">
            {grant.research_area}
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
            <p className="leading-relaxed mb-3">{grant.app_dead}</p>
          </div>
          <div>
            <span className="font-medium text-lg text-black">
              Grant Amount:
            </span>
            <p className="leading-relaxed mb-3">{grant.grant_amt}</p>
          </div>
          <div>
            <span className="font-medium text-lg text-black">
              Projects Funded:
            </span>
            <span className="leading-relaxed mb-3 ml-2">
              {grant.no_app_fund}
            </span>
          </div>
        </div>
      </div>
    ))

  return (
    <section className="text-gray-600 body-font px-12">
      <h1 className="text-center text-secondary font-Roboto font-medium text-3xl mt-16">
        Here are some grants that you might like
      </h1>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">{allGrants}</div>
      </div>
    </section>
  )
}
