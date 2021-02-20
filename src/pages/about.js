import { graphql } from "gatsby"
import React from "react"
import { BackgroundSection } from "../components/Global/BackgroundSection"
import { Info } from "../components/Home/info"
import Layout from "../components/layout"
import SEO from "../components/seo"

const about = ({ data }) => {
  console.log(data.img.childImageSharp.fluid)
  return (
    <Layout>
      <SEO title="About" />
      <BackgroundSection
        styleClass="default-background"
        img={data.img.childImageSharp.fluid}
        title="About Atom"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "aboutPageNasa.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default about
