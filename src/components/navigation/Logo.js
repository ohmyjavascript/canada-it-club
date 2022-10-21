import React from "react"
import { Link } from "gatsby"
import { BsLaptop } from "react-icons/bs"

export const Logo = () => {
  return (
    <Link
      id="Canada IT Club"
      aria-label="Canada IT Club"
      aria-current="page"
      className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
      to="/"
    >
      <BsLaptop size={24} />
      Canada IT Club
    </Link>
  )
}
