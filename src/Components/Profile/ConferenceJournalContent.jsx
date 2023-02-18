import React from "react"

export default function ConferenceJournalContent({journals}) {
  const journalsList = journals.journals.map((journal, index) => (
    <li key={index}>{journal}</li>
  ))
  return (
    <div className="mt-2 ml-4">
      <ul className="list-disc">{journalsList}</ul>
    </div>
  )
}
