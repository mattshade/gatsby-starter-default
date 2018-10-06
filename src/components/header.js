import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '0.45rem 1.0875rem 1rem 1.0875rem',
        borderBottom: '#e1e1e1 solid 1px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >m
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
