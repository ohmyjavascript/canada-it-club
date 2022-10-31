import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StyledAuthor } from "./style"

export const FavoriteSmall = ({ blog, showBgColor }) => {
  const slug = `/blogs/${blog.slug}`
  const customClass = showBgColor
    ? "bg-slate-100 shadow-md hover:bg-slate-200"
    : ""
  return (
    <div className={`px-8 py-4  ${customClass}`}>
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        {blog.publishedDate}
      </p>
      <div className="mb-3">
        <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
          <p className="text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
            {blog.title}
          </p>
        </div>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        {blog.description}
        <span className="block mt-2 text-sky-500 text-sm underline underline-offset-8 mb-4">
          <Link to={slug}> Read More → </Link>
        </span>
      </p>
      <div className="flex items-center">
        <div className="mr-3">
          <StyledAuthor>
            <StaticImage
              alt="alt image"
              placeholder="blurred"
              src={`https://robohash.org/guest`}
            />
          </StyledAuthor>
        </div>
        <div>
          <div className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
            {blog.author}
          </div>
          <p className="text-sm font-medium leading-4 text-gray-600 mb-4">
            Author
          </p>
        </div>
      </div>
    </div>
  )
}
