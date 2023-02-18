import axios from "axios"
import React from "react"

export default function Cards() {
  const [grants, setGrants] = React.useState([])
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/allgrants")
      .then((res) => {
        // console.log(res)
        setGrants(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const allGrants =
    grants &&
    grants.map((grant) => (
      <div key={grant._id} className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
          <h1 className="title-font sm:text-2xl text-center text-xl font-bold text-gray-900 mb-3">
            {grant.title}
          </h1>
          <h1 className="title-font sm:text-xl text-lg font-medium text-gray-900 mb-3">
            {grant.entity}
          </h1>
          <div>
            <span className="font-medium text-lg text-black">
              Eligibility Critera:
            </span>
            <p className="leading-relaxed mb-3">
              {grant.criteria.length > 1
                ? grant.criteria.map((criterion) => criterion)
                : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia`}
            </p>
          </div>

          <a
            href={grant.url}
            target="_blank"
            className="text-indigo-500 inline-flex items-center"
          >
            Learn More
          </a>
        </div>
      </div>
    ))

  return (
    <section className="text-gray-600 body-font px-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{allGrants}</div>
      </div>
    </section>
  )
}
