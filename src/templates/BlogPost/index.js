import React from "react";
import { graphql } from "gatsby";
import {  RichText } from "components";
export default function BlogPost(props) {
   return (
    <div class=" w-full px-5 py-24 mx-auto lg:px-32">
    <div class="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
        <div class="mb-5 border-b border-gray-200">
            <div class="flex flex-wrap items-baseline -mt-2">
                <h5>{props.data.contentfulBlogPost. publishedDate}</h5>
                 </div>
        </div>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p> {props.data.contentfulBlogPost.description}</p>
        <p>
        <RichText raw={props.data.contentfulBlogPost.pageContent.raw}></RichText>
        </p>
    </div>
</div>
           );
};

export const query = graphql`
    query BlogPostQuery($postId: String) {
        contentfulBlogPost(contentful_id: { eq: $postId }) {
            publishedDate(formatString: "DD MMM YYYY")
            pageContent {
                raw
            }
            description
            title
            contentful_id
            slug
        }
    }
`;

