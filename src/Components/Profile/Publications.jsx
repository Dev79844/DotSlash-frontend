import React from "react"
import {Icon} from "@iconify/react"
import PublicationsContent from "./PublicationsContent"

export default function Publications() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-secondary font-medium">Publications</h1>
        <Icon icon="material-symbols:add" className="text-4xl cursor-pointer" />
      </div>
      <PublicationsContent />
    </div>
  )
}
