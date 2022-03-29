import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { RiTwitterFill, RiInstagramFill } from "react-icons/ri"
import { FaGithubAlt } from "react-icons/fa"

const contact = () => {
  return (
    <Layout>
      <Seo title="contact" />
      <div className="main-content">
        <h1>Get in Touch</h1>
        <a href="https://twitter.com/christalynn_RD">
          <RiTwitterFill
            className="icon-contact"
            aria-label="Follow on Twitter"
          />
        </a>
        <a href="https://instagram.com/christalynn_redesign">
          <RiInstagramFill
            className="icon-contact"
            aria-label="Follow on Instagram"
          />
        </a>
        <a href="https://github.com/christa-lynn">
          <FaGithubAlt className="icon-contact" aria-label="Follow on Github" />
        </a>
      </div>
    </Layout>
  )
}

export default contact
