import React from "react"

export const FormSubmissionAlert = () => {
  return (
    <section className="">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-sm text-green-600">
                <p>
                  Thanks for the message. We will check them and get back asap!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
