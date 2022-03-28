import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const blogListPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className="main-content">
        {data.allMdx.nodes.map(node => {
          let image = getImage(node.frontmatter.banner_img)

          return (
            <article key={node.id} className="blog-preview">
              <GatsbyImage
                image={image}
                alt={node.frontmatter.banner_img_alt}
              />
              <div>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <span>{node.frontmatter.category} | </span>
                <span>{node.frontmatter.date}</span>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          category
          banner_img_alt
          banner_img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 300)
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default blogListPage
