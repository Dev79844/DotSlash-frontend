import React from "react"

export default function AwardsContent() {
  const awards = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
  ]

  const awardsList = awards.map((award) => (
    <li>{award}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <li>{awardsList}</li>
    </div>
  )
}
