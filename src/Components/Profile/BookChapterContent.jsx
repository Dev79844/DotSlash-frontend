import React from "react"

export default function BookChapterContent() {
  const bookChapter = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
  ]

  const bookChapterList = bookChapter.map((chapter) => (
    <li>{chapter}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <li>{bookChapterList}</li>
    </div>
  )
}
