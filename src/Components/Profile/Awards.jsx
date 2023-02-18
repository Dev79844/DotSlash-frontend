import React from "react"
import {Icon} from "@iconify/react"
import AwardsContent from "./AwardsContent"
import Modal from "react-modal"
import AddAwards from "./AddAwards"

export default function Awards(props) {
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
          <h1 className="text-2xl text-secondary font-medium">Awards</h1>
          <Icon
            icon="material-symbols:add"
            className="text-4xl cursor-pointer"
            onClick={openModal}
          />
        </div>
        <AwardsContent awards={props} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <AddAwards
          closeModal={closeModal}
          setUpdatedAwards={props.setUpdatedAwards}
        />
      </Modal>
    </>
  )
}
