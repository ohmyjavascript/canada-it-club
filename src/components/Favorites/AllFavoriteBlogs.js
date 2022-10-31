import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FavoriteLarge, FavoriteSmall, FavoritesHeader } from "../../components"

export const AllFavoriteBlogs = () => {
  const result = useStaticQuery(graphql`
    query AllFavBlogsQuery {
      allContentfulBlogPost(filter: { showInFavories: { eq: true } }) {
        blogs: nodes {
          slug
          title
          publishedDate(formatString: "DD MMM YYYY")
          contentful_id
          description
          author
          showInFavories
          isFavorite
        }
      }
    }
  `)
  const { blogs } = result.allContentfulBlogPost
  const isFavoriteBlog = blogs.find(b => b.isFavorite === "Yes")
  return (
    <div>
      <FavoritesHeader />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5"></div>
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          {isFavoriteBlog && (
            <FavoriteLarge showBgColor blog={isFavoriteBlog} />
          )}
          <div className="flex flex-col space-y-8 lg:col-span-3">
            {blogs.map(blog => {
              return blog.isFavorite === "No" ? (
                <FavoriteSmall
                  showBgColor
                  key={blog.contentful_id}
                  blog={blog}
                />
              ) : null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
