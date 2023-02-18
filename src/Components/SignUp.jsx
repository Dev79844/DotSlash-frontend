import React from "react"
import {Icon} from "@iconify/react"
import axios from "axios"

export default function SignUp(props) {
  const [loginData, setLoginData] = React.useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    department: "",
    institution: "",
    age: "",
    permanentEmployee: "",
  })

  const handleLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const [isLoading, setIsLoading] = React.useState(false)

  const handleSignUp = () => {
    setIsLoading(true)
    axios
      .post("http://localhost:3000/api/v1/register", {
        name: loginData.name,
        email: loginData.email,
        password: loginData.password,
        designation: loginData.designation,
        department: loginData.department,
        institution: loginData.institution,
        age: loginData.age,
        permanentEmployment: loginData.permanentEmployee,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        props.closeModal()
        setIsLoading(false)
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
            <input
              type="text"
              placeholder="Enter name"
              className="border-b border-black px-2 py-1 text-xl w-full  placeholder:text-black placeholder:font-bold"
              value={loginData.name}
              name="name"
              onChange={handleLoginData}
            />
            <input
              type="email"
              placeholder="Enter email"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="email"
              value={loginData.email}
              onChange={handleLoginData}
            />

            <input
              type="password"
              placeholder="Enter password"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="password"
              value={loginData.password}
              onChange={handleLoginData}
            />
            <input
              type="text"
              placeholder="Enter designation"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="designation"
              value={loginData.designation}
              onChange={handleLoginData}
            />
            <input
              type="text"
              placeholder="Enter department"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="department"
              value={loginData.department}
              onChange={handleLoginData}
            />
            <input
              type="text"
              placeholder="Enter institution"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="institution"
              value={loginData.institution}
              onChange={handleLoginData}
            />
            <input
              type="text"
              placeholder="Enter age"
              className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
              name="age"
              value={loginData.age}
              onChange={handleLoginData}
            />
            <div>
              <h1 className="mt-3 text-xl">
                Are you a permanent employee at academia/research ?
              </h1>
              <div className="flex gap-10 mt-2">
                <div className="flex items-center gap-2 text-xl">
                  <h1 className="font-medium">Yes</h1>
                  <input
                    type="radio"
                    name="permanentEmployee"
                    value="true"
                    onChange={handleLoginData}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="font-medium">No</h1>
                  <input
                    type="radio"
                    name="permanentEmployee"
                    value="false"
                    onChange={handleLoginData}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <h1>Already registered? </h1>
              <h1 className="cursor-pointer">Login</h1>
            </div>
            <button
              type="submit"
              className="block w-3/5 mt-4 mx-auto font-medium border-secondary border-2 hover:bg-secondary hover:text-white transition-colors duration-500 px-4 text-lg rounded py-1 sm:w-2/5"
              onClick={handleSignUp}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
