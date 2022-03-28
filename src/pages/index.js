import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="hero">
      <div className="hero-text">
        <span className="hero-heading">Heading</span>
        <span className="hero-subheading">subheading</span>
        <button className="btn hero-btn">CTA</button>
      </div>
    </header>
    <div className="main-content">
      <h1>Home</h1>
    </div>
  </Layout>
)

export default IndexPage
