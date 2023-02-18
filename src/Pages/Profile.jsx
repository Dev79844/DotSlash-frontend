import React from "react"
import ProfHeader from "../Components/Profile/ProfHeader"
import About from "../Components/Profile/About"
import Publications from "../Components/Profile/Publications"
import Awards from "../Components/Profile/Awards"
import ConferenceJournals from "../Components/Profile/ConferenceJournals"
import BookChapter from "../Components/Profile/BookChapter"
import Contact from "../Components/Profile/Contact"

export default function Profile() {
  return (
    <div className="font-Roboto">
      <ProfHeader />
      <div className="px-28">
        <About />
        <hr className="mt-5 bg-gray-400 h-[2px]" />
        <Publications />
        <hr className="mt-5 bg-gray-400 h-[2px]" />
        <Awards />
        <hr className="mt-5 bg-gray-400 h-[2px]" />
        <ConferenceJournals />
        <hr className="mt-5 bg-gray-400 h-[2px]" />
        <BookChapter />
        <hr className="mt-5 bg-gray-400 h-[2px]" />
        <Contact />
      </div>
    </div>
  )
}
