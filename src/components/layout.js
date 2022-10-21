import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Header } from "components"
import "./layout.css"
import { Footer } from "components"

const GlobalStyle = createGlobalStyle`
  body{
    font-family:'Playfair Display', 'Inter', sans-serif; 
    line-height: 1.2;
    letter-spacing:1px;
    margin: 0;
    padding: 0;
    p {
     /*font-family: 'Inter', sans-serif; */
    }
  }
`

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
