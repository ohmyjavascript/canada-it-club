import React from "react"
import { BsLaptop } from "react-icons/bs"
import { SocialIcons } from "components"

export const Footer = () => {
  return (
    <footer>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="www.google.com"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <BsLaptop size={24} />
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} &middot; All Rights Reserved Canada IT
          Club
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcons onlyIcons />
        </span>
      </div>
    </footer>
  )
}
