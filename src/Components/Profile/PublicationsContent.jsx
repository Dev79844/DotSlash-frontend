import React from "react"

export default function PublicationsContent() {
  const publications = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
  ]

  const publicationList = publications.map((publication) => (
    <li>{publication}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <li>{publicationList}</li>
    </div>
  )
}
