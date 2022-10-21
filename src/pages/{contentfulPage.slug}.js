import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout"
import { RichText } from '../components/RichText';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
export default function ContentfulPage(props) {
    console.log("lll",props);
    console.log("htyyyy");
    return(
        
    <div>
        <div>{props.data.contentfulPage.title}</div>
        {!!props.data.contentfulPage.pageContent && (
                <RichText
                    references={
                        props.data.contentfulPage.pageContent.references
                    }
                    raw={props.data.contentfulPage.pageContent.raw}
                />
            )}
                </div>
    
//     <div>
//  <div>{props.data.contentfulPage.title}</div>
//     {documentToReactComponents(JSON.parse(props.data.contentfulPage.pageContent.raw))
//     }
//    </div>
 );  
}
export const query = graphql`
query PageQuery($id: String) {
    contentfulPage(id: {eq: $id}){
        id
        title
        pageContent{
            raw
            references{
                ... on ContentfulHeroBanner{
                    __typename
                contentful_id
                heading
                subHeading
                    backgroundImage{
                          gatsbyImageData(layout:FULL_WIDTH,
                             placeholder:BLURRED)
                                  }
                }
                      }
                    }
        }
    }
  
  `