import React from "react"
import Navbar from "../Navbar"

export default function ProfHeader({data}) {
  console.log(data)

  return (
    <div>
      <Navbar />
      <div className="relative mt-7">
        <div className="bg-secondary w-full h-48"></div>
        <div className="bg-gray-300 w-36 h-36 rounded-full absolute -bottom-20 left-20">
          <img
            src={"https://picsum.photos/200/300?grayscale"}
            className="w-36 h-36 rounded-full object-cover object-center"
            alt="avatar"
          />
        </div>
      </div>
      <div className="mt-28 px-28">
        <h1 className="text-2xl">{data.name}</h1>
        <h2 className="mt-3 mb-1 text-xl">{data.designation}</h2>
        <h2 className="">{data.email}</h2>
      </div>
    </div>
  )
}
