import React from "react"

export default function AwardsContent({awards}) {
  // console.log(awards.awards)

  const awardsList = awards.awards.map((award, index) => (
    <li key={index}>{award}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <ul className="list-disc">{awardsList}</ul>
    </div>
  )
}
