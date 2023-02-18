import React from "react"

export default function ConferenceJournalContent() {
  const journals = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum asperiores vero iste",
  ]

  const journalsList = journals.map((journal) => <li>{journal}</li>)
  return (
    <div className="mt-2 ml-4">
      <li>{journalsList}</li>
    </div>
  )
}
