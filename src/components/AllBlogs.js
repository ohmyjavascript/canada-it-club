import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "components"

export const AllBlogs = () => {
  const result = useStaticQuery(graphql`
    query AllBlogsQuery {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        blogs: edges {
          node {
            publishedDate
            slug
            title
            pageContent {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  title
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
                }
              }
            }
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
    <div>
      <h1> Blogs </h1>
      {blogs &&
        blogs.length &&
        blogs.map(blog => {
          const { contentful_id, author, description, pageContent } = blog.node
          return (
            <div key={contentful_id}>
              <div> {author}</div>
              <div>{description}</div>
              <RichText
                raw={pageContent.raw}
                references={pageContent.references}
              />
            </div>
          )
        })}
    </div>
  )
}
