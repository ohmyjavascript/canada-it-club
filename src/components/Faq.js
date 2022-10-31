import React from "react"
import { FcCheckmark } from "react-icons/fc"
import { FAQLottieLogo } from "../components"
import { StaticImage } from "gatsby-plugin-image"

const infos = [
  {
    id: 1,
    heading: "Share relavant information",
    text: "We promise to share the information which is relevant to you in the field of IT in Canada. If you are a new immigrant IT professional this is your place to start your first job search in Canada.",
  },
  {
    id: 2,
    heading: "Networking",
    text: "If you are a working Canadian professional, you know the importance of networking in Canada. Canada IT club provides an opportunity to improve your professional networking in Canada, get to know others in your same field.",
  },
  {
    id: 3,
    heading: "Job seeking & Canadian Life",
    text: "We have done extensive research in Canada IT sector, especially on the job market & assisted numerous job seekers with their first IT job in Canada. We will bring to you interview with Hiring Managers, HR Managers, Recruiters providing tips & tricks of getting a job in Canada.",
  },
]

const info2 = [
  {
    id: 4,
    heading: "Meetups",
    text: "We have also upcoming meetup, sessions etc. where you will meet other IT professionals in Canada and discuss your thoughts.",
  },
  {
    id: 5,
    heading: "Mortgage, Finance Advising, Tax consultants",
    text: " We will also give you an exposure to the living in Canada & will bring in the experts such as Real Estate Agents, Mortgage Agents, Financial planners, Tax Consultants etc.",
  },
  {
    id: 6,
    heading: "Tell us your experience. Help us to help more people!",
    text: "If this improves your career, network or day to day life, we have done an outstanding job.",
  },
]
export const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            Here is a glimpse of what we do
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            in a nutshell.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
              Let's start with the professional side
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              You know, the networking, job & Life in Canada thingeeys..
            </p>
            <div className="mt-12 space-y-12">
              {infos.map(info1 => {
                return (
                  <div key={info1.id} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <FcCheckmark size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        {info1.heading}
                      </h4>
                      <p className="mt-2 dark:text-gray-400">{info1.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <StaticImage
              alt="alt image"
              placeholder="traced_svg"
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=800&q=80"
            />
          </div>
        </div>
        <FAQLottieLogo />
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                What about meet ups & online sessions?
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Of course! Tons of them..
              </p>
              <div className="mt-12 space-y-12">
                {info2.map(info2 => {
                  return (
                    <div key={info2.id} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <FcCheckmark size={24} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          {info2.heading}
                        </h4>
                        <p className="mt-2 dark:text-gray-400">{info2.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <StaticImage
                alt="alt image"
                placeholder="traced_svg"
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=600&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
