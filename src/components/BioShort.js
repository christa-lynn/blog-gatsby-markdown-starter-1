import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BioShort = () => {
  return (
    <section className="bio-container">
      <div className="bio-img">
        <StaticImage src="../images/bio-img.jpg" className="avatar" />
      </div>
      <div className="bio-text">
        <h2>About the Author</h2>
        <p>
          Mollit proident magna aute magna anim enim sit et labore tempor amet
          minim commodo. Laboris eiusmod amet dolor nisi consectetur do ea. Sit
          est consectetur ipsum quis ex. Officia eu magna Lorem proident eu
          cupidatat. Est deserunt id proident duis officia occaecat id sunt id.
        </p>
        <Link to="/about">Read More</Link>
      </div>
    </section>
  )
}

export default BioShort
