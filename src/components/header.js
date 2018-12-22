import React, { Component } from 'react'

class Header extends Component {
  handleClickOn = () => {

    if (
      document.querySelector('.times') &&
      document.querySelector('.times').classList.contains('hide')
    ) {
      document.querySelector('.times').classList.remove('hide')
    } else {
      document.querySelector('.times').classList.add('hide')
    }

    if (
      document.querySelector('.bars') &&
      document.querySelector('.bars').classList.contains('hide')
    ) {
      document.querySelector('.bars').classList.remove('hide')
    } else {
      document.querySelector('.bars').classList.add('hide')
    }

    if (
      document.querySelector('.menuLinks') &&
      document.querySelector('.menuLinks').classList.contains('hide')
    ) {
      var x = document.querySelectorAll('.menuLinks')
      var i
      for (i = 0; i < x.length; i++) {
        x[i].classList.remove('hide')
      }
    } else {
      var p = document.querySelectorAll('.menuLinks')
      var j
      for (j = 0; j < p.length; j++) {
        p[j].classList.add('hide')
      }
    }
  }

  render() {
    return (
      <div
        style={{
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            padding: '0.45rem 1.0875rem 1rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <a
              href="/"
              style={{
                color: '#b3b3b3',
                textDecoration: 'none',
              }}
            >
              m
            </a>
          </h1>
        </div>

        <ul className="nav" style={{ listStyle: 'none' }}>
          <li onClick={this.handleClickOn} className="bars">
            <i className="fas fa-bars" />
          </li>
          <li onClick={this.handleClickOn} className="times hide">
            <i className="fas fa-times" />
          </li>
          {this.props.menuLinks.map(link => (
            <li
              className="menuLinks hide"
              key={link.name}
              style={{
                listStyleType: 'none',
              }}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Header
