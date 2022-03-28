import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout"

const blogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.banner_img)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="main-content">
        <p>{data.mdx.frontmatter.date}</p>
        <p>{data.mdx.frontmatter.category}</p>

        <GatsbyImage image={image} alt={data.mdx.frontmatter.banner_img_alt} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        category
        banner_img_alt
        banner_img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default blogPost
