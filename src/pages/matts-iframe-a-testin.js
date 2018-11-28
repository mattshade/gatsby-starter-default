import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

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
