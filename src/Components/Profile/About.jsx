import React, {useEffect} from "react"
import {Icon} from "@iconify/react"
import Modal from "react-modal"
import AddAbout from "./AddAbout"
import axios from "axios"
import {useParams} from "react-router-dom"

export default function About(props) {
  const {profileId} = useParams()
  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: "50vw",
    },
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-secondary font-medium">About</h1>
          <Icon
            icon="material-symbols:add"
            className="text-4xl cursor-pointer"
            onClick={openModal}
          />
        </div>
        <p className="mt-2 ">{props.updatedAbout}</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <AddAbout
          closeModal={closeModal}
          setUpdatedAbout={props.setUpdatedAbout}
        />
      </Modal>
    </>
  )
}
