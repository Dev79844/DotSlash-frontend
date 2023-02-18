import React from "react"
import {Icon} from "@iconify/react"
import BookChapterContent from "./BookChapterContent"

export default function BookChapter(props) {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-secondary font-medium">Book Chapters</h1>
        <Icon icon="material-symbols:add" className="text-4xl cursor-pointer" />
      </div>
      <BookChapterContent bookChapter={props} />
    </div>
  )
}
