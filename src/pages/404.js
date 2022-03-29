import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { FaSadTear } from "react-icons/fa"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="main-content error-flex">
      <h1>404: Not Found</h1>
      <p>Uh-oh! You just hit a route that doesn't exist... so sad.</p>
      <FaSadTear className="icon-404" />
    </div>
  </Layout>
)

export default NotFoundPage
