import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SocialIcons } from "components"

export const bannerQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            transformOptions: { cropFocus: NORTH }
          )
        }
      }
    }
  }
`

export const Banner = () => {
  const data = useStaticQuery(bannerQuery)
  const image = data.allFile.nodes[0]
  const name = data.allFile.nodes[0].name
  const pathToImage = getImage(image)

  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            The one-stop Shop
            <br className="hidden md:block" />
            for all your IT Queries
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            There is nothing more important than networking, when it comes to
            securing a job in Canada, and you are at the right place to get all
            your queries answered!
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-black"
            >
              Learn more
            </a>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <GatsbyImage
          image={pathToImage}
          alt={name}
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        />
      </div>
    </div>
  )
}
