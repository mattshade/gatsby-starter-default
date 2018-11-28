import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

console.log("shady");
console.log(window.parent.AMP);

const IframePage = () => (
  <Layout>
  <p>hallo</p>
    <script>
      console.log("shady");
      console.log(window.parent.AMP);
    </script>
  </Layout>
)

export default IframePage
