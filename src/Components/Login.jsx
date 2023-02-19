import React from "react"
import {Icon} from "@iconify/react"
import Modal from "react-modal"
import SignUp from "./SignUp"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Login(props) {
  const navigate = useNavigate()
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

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  })

  const handleLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    axios
      .post("http://localhost:3000/api/v1/login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        setIsLoading(false)
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        navigate(`/profile/${res.data.researcherID}`)
        //   props.closeModal()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="font-Roboto">
        <div className="relative ">
          <Icon
            icon="radix-icons:cross-2"
            color="#f03a47"
            className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
            onClick={props.closeModal}
          />

          <div className="pt-12 mx-4 pb-8 lg:mx-6 lg:pt-20 lg:pb-16">
            <div className="sm:flex sm:gap-8 sm:justify-between ">
              <input
                type="email"
                placeholder="Enter email"
                className="border-b border-black px-2 py-1 text-xl w-full  placeholder:text-black placeholder:font-bold"
                value={loginData.email}
                name="email"
                onChange={handleLoginData}
              />
            </div>

            <input
              type="password"
              placeholder="Enter password"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="password"
              value={loginData.password}
              onChange={handleLoginData}
            />

            <div className="flex justify-between mt-2">
              <h1>Not yet registered? </h1>
              <h1 className="cursor-pointer" onClick={openModal}>
                Register Here
              </h1>
            </div>
            <button
              type="submit"
              className="block w-3/5 mt-4 mx-auto font-medium border-secondary border-2 hover:bg-secondary hover:text-white transition-colors duration-500 px-4 text-lg rounded py-1 sm:w-2/5"
              onClick={handleLogin}
            >
              {isLoading ? "Please Wait" : "Login"}
            </button>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <SignUp closeModal={closeModal} />
      </Modal>
    </>
  )
}
