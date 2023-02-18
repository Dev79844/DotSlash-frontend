import React from "react"
import {Icon} from "@iconify/react"
import ConferenceJournalContent from "./ConferenceJournalContent"

export default function ConferenceJournals() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-secondary font-medium">Conference Journals</h1>
        <Icon icon="material-symbols:add" className="text-4xl cursor-pointer" />
      </div>
      <ConferenceJournalContent />
    </div>
  )
}
