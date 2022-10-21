import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Header } from "components"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body{
    font-family:'Playfair Display', 'Inter', sans-serif; 
    line-height: 1.2;
    margin: 0;
    padding: 0;
    
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
          © {new Date().getFullYear()} &middot; All Rights Reserved Canada IT
          Club
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
