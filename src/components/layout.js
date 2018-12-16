import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Tech Lead, Developer, Designer' },
            { name: 'keywords', content: 'matt shade tech design' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content:'https://www.mattshade.com' },
            { property: 'og:site_name', content:'Matt Shade' },
            { property: 'og:title', content:'Matt Shade' },
            { property: 'og:description', content:'Tech Lead, Developer, Designer' },
            { name: 'twitter:creator', content:'@mattShade' },
            { name: 'twitter:title', content:'Matt Shade' },
            { name: 'twitter:description', content:'Tech Lead, Developer, Designer' },
            { name: 'author', content:'Matt Shade' },
          ]}
        >

        <html lang="en" />
        </Helmet>
        <div
          id='particles-js'
        >
        </div>

        <Header siteTitle={data.site.siteMetadata.title} />

        <Helmet>
        <script src='/particles.js'></script>
        <script src='/particles-load.js'></script>
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 'auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            color: '#b3b3b3',
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
