import React from "react"
import {Icon} from "@iconify/react"
import {useParams} from "react-router-dom"
import axios from "axios"

export default function AddPublications(props) {
  const {profileId} = useParams()
  const {setUpdatedPublication} = props

  const [isLoading, setIsLoading] = React.useState(false)

  const [publication, setPublication] = React.useState()

  const handlePublication = (e) => {
    setPublication(e.target.value)
  }

  const handleSave = () => {
    setIsLoading(true)
    axios
      .put(`http://localhost:3000/api/v1/pub/${profileId}`, {
        params: {
          id: profileId,
        },
        updatedPublication: publication,
      })
      .then((res) => {
        setIsLoading(false)
        props.closeModal()
        console.log(res)
        setUpdatedPublication(res.data[0].publication)
        // console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="font-Roboto">
      <div className="relative ">
        <Icon
          icon="radix-icons:cross-2"
          color="#f03a47"
          className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
          onClick={props.closeModal}
        />

        <div className="pt-12 mx-4 pb-8 lg:mx-6 lg:pt-20 lg:pb-16">
          <textarea
            placeholder="Add publication"
            className="border border-black px-2 py-1 text-xl w-full  placeholder:text-black placeholder:font-bold"
            value={publication}
            name="email"
            onChange={handlePublication}
          />

          <button
            type="submit"
            className="block w-3/5 mt-4 mx-auto font-medium border-secondary border-2 hover:bg-secondary hover:text-white transition-colors duration-500 px-4 text-lg rounded py-1 sm:w-2/5"
            onClick={handleSave}
          >
            {isLoading ? "Please Wait" : "Save"}
          </button>
        </div>
      </div>
    </div>
  )
}
