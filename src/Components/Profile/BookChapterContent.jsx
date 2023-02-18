import React from "react"

export default function BookChapterContent({bookChapter}) {
  const bookChapterList = bookChapter.bookChapter.map((chapter, index) => (
    <li key={index}>{chapter}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <ul className="list-disc">{bookChapterList}</ul>
    </div>
  )
}
