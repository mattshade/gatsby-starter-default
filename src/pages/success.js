import React from 'react'

import Layout from '../components/layout'

class SuccessPage extends React.Component{

render(){
  return(
  <Layout>
<div
style={{
  textAlign: 'center',
  fontSize: '26px',
  paddingTop: '30px',
}}>
  <p className="thanksMessage">
    Thanks! I'll be in touch soon.
  </p>
  <p className="thanksMessage">
    <a href="/">Let's get out of here!</a>
  </p>
  </div>

  </Layout>
)
}


}

export default SuccessPage
