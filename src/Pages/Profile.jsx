import React, {useEffect} from "react"
import ProfHeader from "../Components/Profile/ProfHeader"
import About from "../Components/Profile/About"
import Publications from "../Components/Profile/Publications"
import Awards from "../Components/Profile/Awards"
import ConferenceJournals from "../Components/Profile/ConferenceJournals"
import BookChapter from "../Components/Profile/BookChapter"
import {useParams} from "react-router-dom"
import axios from "axios"

export default function Profile() {
  // console.log(data)

  const {profileId} = useParams()

  const [res, setRes] = React.useState()
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
        setRes(res.data[0])
        console.log(res.data[0])
        setUpdatedAbout(res.data[0].bio)
        setUpdatedPublication(res.data[0].publication)
        setUpdatedAwards(res.data[0].awards)
        setUpdatedConference(res.data[0].conference)
        setUpdatedBookCh(res.data[0].bookChapters)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(res)

  if (isLoading) {
    return <div>Loading</div>
  } else {
    return (
      <div className="font-Roboto">
        {res === undefined ? null : <ProfHeader data={res} />}

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
        </div>
      </div>
    )
  }
}
