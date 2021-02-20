import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/Global/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    img: file(relativePath: { eq: "defaultBackground.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 720) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  console.log(data.img.childImageSharp.fluid)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        styleClass="default-background"
        img={data.img.childImageSharp.fluid}
        title="Atom Shop"
      />
    </Layout>
  )
}
export default IndexPage
