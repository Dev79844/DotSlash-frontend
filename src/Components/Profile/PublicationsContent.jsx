import React from "react"

export default function PublicationsContent(props) {
  console.log(props.publications.publications)
  const publicationList = props.publications.publications.map(
    (publication, index) => <li key={index}>{publication}</li>
  )
  return (
    <div className="mt-2 ml-4">
      <ul className="list-disc">{publicationList}</ul>
    </div>
  )
}
