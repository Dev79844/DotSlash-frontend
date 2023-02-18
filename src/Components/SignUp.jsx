import React from "react"
import {Icon} from "@iconify/react"

export default function SignUp(props) {
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
              <h1>Already registered? </h1>
              <h1 className="cursor-pointer">Login</h1>
            </div>
            <button
              type="submit"
              className="block w-3/5 mt-4 mx-auto font-medium border-secondary border-2 hover:bg-secondary hover:text-white transition-colors duration-500 px-4 text-lg rounded py-1 sm:w-2/5"
              onClick={() => {
                console.log(loginData)
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
