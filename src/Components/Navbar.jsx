import React from "react"
import Modal from "react-modal"
import {Link} from "react-router-dom"
import Login from "./Login"

export default function Navbar() {
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
      <div className="flex justify-between px-16 py-1 text-2xl mt-8">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl">
            Only<span className="text-secondary">Grants</span>
          </h1>
        </Link>
        <h1 className="cursor-pointer" onClick={openModal}>
          Login
        </h1>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <Login closeModal={closeModal} />
      </Modal>
    </>
  )
}
