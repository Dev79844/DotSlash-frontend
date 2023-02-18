import React from "react"

export default function PublicationsContent({publications}) {
  // console.log(publications)

  const publicationList = publications.publications.map(
    (publication, index) => <li key={index}>{publication}</li>
  )
  return (
    <div className="mt-2 ml-4">
      <ul className="list-disc">{publicationList}</ul>
    </div>
  )
}
