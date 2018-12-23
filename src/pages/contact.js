import React from 'react'

import Layout from '../components/layout'
import { Link } from "gatsby"


class ContactPage extends React.Component{

render(){
  return(
  <Layout>
  <form name="contact" method="POST" action="/success/" data-netlify="true">
  <p>
    <input placeholder="Your Name" type="text" name="name" />
  </p>
  <p>
    <input placeholder="Email" type="email" name="email" />
  </p>
  <p>
    <textarea placeholder="Add Your Message Here" name="message" rows="6"></textarea>
  </p>

  <div data-netlify-recaptcha="true"></div>
    <button
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    type="submit"><i className="fab fa-telegram-plane"></i></button>

</form>
  </Layout>
)
}


}

export default ContactPage
