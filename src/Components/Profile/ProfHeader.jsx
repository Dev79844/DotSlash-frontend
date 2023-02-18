import React from "react"

export default function ProfHeader() {
  return (
    <div>
      <div className="relative">
        <div className="bg-secondary w-full h-48"></div>
        <div className="bg-gray-300 w-36 h-36 rounded-full absolute -bottom-20 left-20"></div>
      </div>
      <div className="mt-28 px-28">
              <h1 className="text-2xl">Name</h1>
              <h2 className="text-secondary">@name</h2>
      </div>
    </div>
  )
}
