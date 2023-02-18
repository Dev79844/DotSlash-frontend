import React, {useEffect} from "react"
import ProfHeader from "../Components/Profile/ProfHeader"
import About from "../Components/Profile/About"
import Publications from "../Components/Profile/Publications"
import Awards from "../Components/Profile/Awards"
import ConferenceJournals from "../Components/Profile/ConferenceJournals"
import BookChapter from "../Components/Profile/BookChapter"
import Contact from "../Components/Profile/Contact"
import {useLocation} from "react-router-dom"
import {useParams} from "react-router-dom"
import axios from "axios"

export default function Profile() {
  const location = useLocation()
  const data = location.state.data
  // console.log(data)

  const {profileId} = useParams()

  const [updatedAbout, setUpdatedAbout] = React.useState("")
  const [updatedPublication, setUpdatedPublication] = React.useState([])
  const [updatedAwards, setUpdatedAwards] = React.useState([])
  const [updatedConference, setUpdatedConference] = React.useState([])
  const [updatedBookCh, setUpdatedBookCh] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:3000/api/v1/profile/${profileId}`, {
        params: {
          id: profileId,
        },
      })
      .then((res) => {
        setIsLoading(false)
        setUpdatedAbout(res.data.bio)
        setUpdatedPublication(res.data.publication)
        setUpdatedAwards(res.data.awards)
        setUpdatedConference(res.data.conference)
        setUpdatedBookCh(res.data.bookChapters)
      })
      .catch((err) => console.log(err))
  }, [])

  if (isLoading) {
    return <div>Loading</div>
  } else {
    return (
      <div className="font-Roboto">
        <ProfHeader />
        <div className="px-28">
          <About
            updatedAbout={updatedAbout}
            setUpdatedAbout={setUpdatedAbout}
          />
          <hr className="mt-5 bg-gray-400 h-[2px]" />
          <Publications
            publications={updatedPublication}
            updatedPublication={updatedPublication}
            setUpdatedPublication={setUpdatedPublication}
          />
          <hr className="mt-5 bg-gray-400 h-[2px]" />
          <Awards
            awards={updatedAwards}
            updatedAwards={updatedAwards}
            setUpdatedAwards={setUpdatedAwards}
          />
          <hr className="mt-5 bg-gray-400 h-[2px]" />
          <ConferenceJournals
            journals={updatedConference}
            updatedConference={updatedConference}
            setUpdatedConference={setUpdatedConference}
          />
          <hr className="mt-5 bg-gray-400 h-[2px]" />
          <BookChapter
            bookChapter={updatedBookCh}
            updatedBookCh={updatedBookCh}
            setUpdatedBookCh={setUpdatedBookCh}
          />
          <hr className="mt-5 bg-gray-400 h-[2px]" />
          <Contact />
        </div>
      </div>
    )
  }
}
