import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
// import ogImage from '../images/mattshade-site.jpg'

// const siteOgImage = `https://www.mattshade.com${ogImage}`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
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
            { property: 'og:image', content:'http://www.mattshade.com/static/mattshade-site-e97f75a5643b71dbc6691b6f25ac2850.jpg' },
            { property: 'og:image:type', content:'image/jpeg' },
            { property: 'og:image:width', content:'1200' },
            { property: 'og:image:height', content:'630' },
            { property: 'og:image:alt', content:'mattshade.com' },
            { name: 'twitter:creator', content:'@mattShade' },
            { name: 'twitter:title', content:'Matt Shade' },
            { name: 'twitter:description', content:'Tech Lead, Developer, Designer' },
            { name: 'author', content:'Matt Shade' },
            { name: 'google-site-verification', content:'gXnEf9oI5nnNpsZpX3O1qBFymj1VyCQKrdhZ-Y_ig3k' },
          ]}
        >

        <html lang="en" />
        </Helmet>
        <div
          id='particles-js'
        >
        </div>

        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />


        <Helmet>
        <script src='https://mattsha.de/js/particles.min.js'></script>
        <script src='https://mattsha.de/js/particles-load.js'></script>
        </Helmet>



        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 'auto',
            padding: '1.2rem',
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
