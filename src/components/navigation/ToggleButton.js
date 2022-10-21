import React from "react"

export const ToggleButton = ({ isToggleOpen, setIsToggleOpen }) => {
  return (
    <button
      className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
      onClick={() => setIsToggleOpen(!isToggleOpen)}
      aria-expanded={isToggleOpen ? "true" : "false"}
      aria-label="Toggle navigation"
    >
      <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
        ></span>
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
        ></span>
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
        ></span>
      </div>
    </button>
  )
}
