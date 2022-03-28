import React, { useState } from "react"
import { Link } from "gatsby"
import { MdMenu } from "react-icons/md"

const Topnav = () => {
  const [show, setShow] = useState(false)

  return (
    <nav>
      <div className="nav-desktop">
        <div className="nav-header">
          <div className="nav-logo-container">
            <Link to="/">logo</Link>
          </div>
          <MdMenu className="nav-button" onClick={() => setShow(!show)} />
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/blog" className="nav-link">
            blog
          </Link>
          <Link to="/about" className="nav-link">
            about
          </Link>
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Topnav
