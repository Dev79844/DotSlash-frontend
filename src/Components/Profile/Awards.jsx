import React from "react"
import {Icon} from "@iconify/react"
import AwardsContent from "./AwardsContent"

export default function Awards() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-secondary font-medium">Awards</h1>
        <Icon icon="material-symbols:add" className="text-4xl cursor-pointer" />
      </div>
      <AwardsContent />
    </div>
  )
}
