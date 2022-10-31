const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: { allContentfulBlogPost },
  } = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          title
          publishedDate(formatString: "DD MMM YYYY")
          contentful_id
          description
          author
          slug
          showInFavories
          isFavorite
          pageContent {
            raw
          }
        }
      }
    }
  `)

  allContentfulBlogPost.nodes.forEach(blogPost => {
    createPage({
      path: `blogs/${blogPost.slug}`,
      context: {
        postId: blogPost.contentful_id,
      },
      component: path.resolve("./src/templates/BlogPost/index.js"),
    })
  })
}
