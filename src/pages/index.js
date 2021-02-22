import { graphql } from "gatsby"
import React from "react"
import { BackgroundSection } from "../components/Global/BackgroundSection"
import BackgroundSlid from "../components/Global/BackgroundSlider"
import { Info } from "../components/Home/info"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.img.childImageSharp.fluid)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <BackgroundSection
        styleClass="default-background"
        img={data.img.childImageSharp.fluid}
        title="Atom Shop"
      /> */}
      <BackgroundSlid title="Atom Shop" styleClass="default-background" />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "defaultBackground.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
