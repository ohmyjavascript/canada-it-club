import React from "react"
import { PatternDots, LinkButton, QuestionLogo } from "components"

export const TopicIntro = () => {
  return (
    <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-48 h-48">
              <QuestionLogo />
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <PatternDots />
            <p className="text-base text-gray-700 md:text-lg">
              These are the most requested & in demand information that you
              would not want to miss out on. From job search tips, networking
              mantras, Canada life, Tax, Car Expense, Savings, Housing, Mortgage
              and everything you need to know, all under one roof.
            </p>
          </div>
          <div>
            <LinkButton to="/"> Read More </LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}
