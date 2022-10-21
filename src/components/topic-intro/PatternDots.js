import React from "react"

export const PatternDots = () => {
  return (
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        {/* These are the dots svg */}
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="e77df901-b9d7-4b9b-822e-16b2d410795b"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
            width="52"
            height="24"
          />
        </svg>
        <span className="relative">Check</span>
      </span>
      out the Queries Corner..
    </h2>
  )
}
