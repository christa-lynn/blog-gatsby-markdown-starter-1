import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BioShort from "../components/BioShort"
import Subscribe from "../components/Subscribe"
import Categories from "../components/Categories"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="hero">
      <div className="hero-text">
        <span className="hero-heading">Heading</span>
        <span className="hero-subheading">subheading</span>
        <button className="btn hero-btn">button</button>
      </div>
    </header>
    <div className="main-content">
      <Categories />
    </div>
    <div className="accent-content">
      <Subscribe />
    </div>
    <div className="main-content">
      <BioShort />
    </div>
  </Layout>
)

export default IndexPage
