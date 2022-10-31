import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FavoriteSmall } from "components"

export const AllBlogs = () => {
  const result = useStaticQuery(graphql`
    query AllBlogsQuery {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        blogs: edges {
          node {
            publishedDate(formatString: "DD MMM YYYY")
            slug
            title
            entryTitle
            description
            contentful_id
            author
            isFavorite
          }
        }
      }
    }
  `)
  const { blogs } = result.allContentfulBlogPost
  return (
    <div className="px-4 pt-2 pb-16 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-2">
      {blogs &&
        blogs.map(blog => {
          return (
            <div key={blog.node.contentful_id}>
              <FavoriteSmall blog={blog.node} />
            </div>
          )
        })}
    </div>
  )
}
