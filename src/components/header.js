import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo, ToggleButton } from "../components"

const NAVBAR_LINKS = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Blogs", url: "/blogs" },
  { id: 3, text: "Contact", url: "/contact" },
]

export function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <header className="relative z-20 w-full border-b shadow-lg border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-8 2xl:max-w-[96rem]">
          <nav className="flex h-[4rem] items-stretch justify-between text-slate-700">
            <Logo />
            <ToggleButton
              isToggleOpen={isToggleOpen}
              setIsToggleOpen={setIsToggleOpen}
            />

            <ul
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {NAVBAR_LINKS.map(listItem => {
                return (
                  <li key={listItem.id} className="flex items-stretch">
                    <Link
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 lg:px-8"
                      to={listItem.url}
                    >
                      <span> {listItem.text}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
