import { graphql } from "gatsby"
import React from "react"
//import { BackgroundSection } from "../components/Global/BackgroundSection"
import BackgroundSlid from "../components/Global/BackgroundSlider"
import { Info } from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { menu } }) => {
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
      <Menu items={menu} />
    </Layout>
  )
}

export const query = graphql`
  {
    menu: allContentfulShopItem {
      edges {
        node {
          id: contentful_id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
