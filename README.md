```
Query for Blogs reference

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "components"

export const AllFavoriteBlogs = () => {
const result = useStaticQuery(graphql` query FavoriteBlogQuery { allContentfulBlogPost( sort: { fields: publishedDate, order: DESC } filter: { isFavorite: { eq: true } } ) { blogs: edges { node { publishedDate slug title pageContent { raw references { ... on ContentfulAsset { contentful_id title gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED) } } } entryTitle description contentful_id author isFavorite } } } } `)
const { blogs } = result.allContentfulBlogPost
return (
<div>
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


```
Reference with Thumbnails if needed
```
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const Seo = ({ description, lang, meta = {}, title }) => {
const { site } = useStaticQuery(
graphql` query { site { siteMetadata { title description author } } } `
)

const metaDescription = description || site.siteMetadata.description
const defaultTitle = site.siteMetadata?.title

return (
<Helmet
htmlAttributes={{
        lang,
      }}
title={title}
titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
meta={[
{
name: `description`,
content: metaDescription,
},
{
property: `og:title`,
content: title,
},
{
property: `og:description`,
content: metaDescription,
},
{
property: `og:type`,
content: `website`,
},
{
name: `twitter:card`,
content: `summary`,
},
{
name: `twitter:creator`,
content: site.siteMetadata?.author || ``,
},
{
name: `twitter:title`,
content: title,
},
{
name: `twitter:description`,
content: metaDescription,
},
].concat(meta)}
/>
)
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "components"

export const AllBlogs = () => {
const result = useStaticQuery(graphql` query AllBlogsQuery { allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) { blogs: edges { node { publishedDate slug title pageContent { raw references { ... on ContentfulBlogThumbnail { __typename contentful_id thumbnailTitle thumbnailDescription thumbnailImage { gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG) } } ... on ContentfulAsset { contentful_id title gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG) } } } entryTitle description contentful_id author isFavorite } } } } `)
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

```