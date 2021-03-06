import React from 'react'

import Layout from '../components/layout'


class ContactPage extends React.Component{

render(){
  return(
  <Layout>
  <form name="contact" method="POST" action="/success/" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <input placeholder="Your Name" type="text" name="name" />
  </p>
  <p>
    <input placeholder="Email" type="email" name="email" />
  </p>
  <p>
    <textarea placeholder="Add Your Message Here" name="message" rows="6"></textarea>
  </p>
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
