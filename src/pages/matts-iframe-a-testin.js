import React from 'react'

import Layout from '../components/layout'


class IframePage extends React.Component{
componentDidMount(){
  console.log("shady");
  console.log(window.parent.AMP);
}

render(){
  return(
  <Layout>
  <p>hallo</p>
    <script>
      console.log("shady");
      console.log(window.parent.AMP);
    </script>
  </Layout>
)
}


}

export default IframePage
