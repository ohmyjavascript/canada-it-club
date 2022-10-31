import React from "react"
import { graphql } from "gatsby"
import { Layout, RichText, Seo } from "../../components"

const BlogPost = props => {
  const { title, description, publishedDate, author } =
    props.data.contentfulBlogPost
  return (
    <Layout>
      <Seo title={title} description={description} />
      <div className="px-4 py-3 mx-auto container">
        <div className="pt-16">
          <p className="text-xs tracking-wide text-gray-600 uppercase">
            {publishedDate} / {author}
          </p>
          <div className="mb-3">
            <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p className="text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                {title}
              </p>
            </div>
          </div>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="s9-widget-wrapper"></div>
          <div className="divider div-transparent div-dot"></div>
          <RichText
            references={props.data.contentfulBlogPost.pageContent.references}
            raw={props.data.contentfulBlogPost.pageContent.raw}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: { eq: $postId }) {
      publishedDate(formatString: "DD MMM YYYY")
      pageContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
      description
      title
      contentful_id
      slug
      author
    }
  }
`

export default BlogPost
