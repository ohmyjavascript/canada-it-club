import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Wrapper, ImageWrapper } from "./style"

export const RichText = ({ raw, references = [] }) => {
  const referencesMap = {}

  references.forEach(reference => {
    referencesMap[reference.contentful_id] = reference
  })

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="font-bold">{children}</h1>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="font-bold">{children}</h2>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const data = referencesMap[node.data.target.sys.id]
        return (
          <ImageWrapper>
            <GatsbyImage alt={data.title} image={data.gatsbyImageData} />
          </ImageWrapper>
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const data = referencesMap[node.data.target.sys.id]
        console.log("CHECK", data)
        switch (data.__typename) {
          case "ContentfulBlogThumbnail":
            return <div>ContentfulBlogThumbnail</div>

          default:
            return null
        }
      },
    },
  }

  return (
    <Wrapper>{documentToReactComponents(JSON.parse(raw), options)}</Wrapper>
  )
}
