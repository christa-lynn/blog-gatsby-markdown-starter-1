import * as React from "react"
import PropTypes from "prop-types"
import "../components/layout.css"
import Footer from "./Footer"
import Topnav from "./Topnav"

const Layout = ({ children }) => {
  return (
    <>
      <Topnav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
