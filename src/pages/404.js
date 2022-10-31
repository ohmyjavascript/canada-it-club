import React from "react"
import { Seo } from "../components/Seo"
import { Layout } from "../components/layout"
import { LinkButton } from "../components/common/LinkButton"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Oops! It isn your fault, its on us!
              </p>
            </div>
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Lets get you up and running again.
            </h2>
            <p className="text-base md:text-lg">
              Hit the link below and head back to safety
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <LinkButton url="/"> Home </LinkButton>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <StaticImage
            alt="alt image"
            placeholder="traced_svg"
            className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=600&&q=80"
          />
        </div>
      </div>
    </div>
  </Layout>
)
export default NotFoundPage
