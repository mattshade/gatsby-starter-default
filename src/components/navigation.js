import React from 'react'

const Navigation = ({ menuLinks }) => (

  <ul className="nav" style={{'listStyle':'none'}}>
<li
  // onClick={this.handleClick()}
>
<i className="fas fa-bars"></i></li>
<li><i className="fas fa-times"></i></li>
{
  menuLinks.map(link =>
  <li key={link.name}
    style={{
      'listStyleType': 'none',
      'display': 'none',
    }}
  >
    <a href={link.link}>{link.name}</a>
  </li>)
}
</ul>
)


export default Navigation
