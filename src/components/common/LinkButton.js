import { Link } from "gatsby"
import React from "react"

export const LinkButton = ({ children, url }) => {
  return (
    <Link
      to={url}
      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-none shadow-md bg-black"
    >
      {children} →
    </Link>
  )
}
