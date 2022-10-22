import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { SocialIcons, LinkButton } from "components"
import { useStaticQuery, graphql } from "gatsby"

export const Banner = () => {
  const result = useStaticQuery(graphql`
    query HeroBannerQuery {
      contentfulHeroBanner {
        backgroundImage {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
        subHeading
        heading
      }
    }
  `)

  const { heading, subHeading, backgroundImage } = result.contentfulHeroBanner

  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            {heading}
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            {subHeading}
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <LinkButton to="/"> Read More </LinkButton>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <GatsbyImage
          image={backgroundImage.gatsbyImageData}
          alt={heading}
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        />
      </div>
    </div>
  )
}
