import React from "react"
import {Icon} from "@iconify/react"

export default function About() {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-secondary font-medium">About</h1>
        <Icon icon="material-symbols:add" className="text-4xl cursor-pointer" />
      </div>
      <p className="mt-2 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        delectus sit ex, quos at, nobis placeat dolor voluptas sint tenetur vel
        blanditiis ducimus necessitatibus molestiae ratione. Nobis magnam
        quisquam doloremque autem reiciendis culpa necessitatibus recusandae
        impedit odit nostrum hic iusto iure ea tempore soluta iste accusantium
        explicabo, cumque ipsum blanditiis!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        delectus sit ex, quos at, nobis placeat dolor voluptas sint tenetur vel
        blanditiis ducimus necessitatibus molestiae ratione. Nobis magnam
        quisquam doloremque autem reiciendis culpa necessitatibus recusandae
        impedit odit nostrum hic iusto iure ea tempore soluta iste accusantium
        explicabo, cumque ipsum blanditiis!
      </p>
    </div>
  )
}
