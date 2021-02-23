import React from "react"
import BackgroundSlider from "gatsby-image-background-slider"
import { graphql, useStaticQuery } from "gatsby"
const BackgroundSlid = ({ styleClass, title, children }) => {
  return (
    <section className={styleClass}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      <BackgroundSlider
        className={styleClass}
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(filter: { sourceInstanceName: { eq: "bg" } }) {
              nodes {
                relativePath
                sourceInstanceName
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={[
          "defaultBackground",
          "aboutPageNasa.jpg",
          "luis-quintero.jpg",
          "medhat-ayad.jpg",
          "michal-hajtas.jpg",
          "pixabay.jpg",
        ]}
        // pass down standard element props
        style={{}}
      ></BackgroundSlider>
    </section>
  )
}

export default BackgroundSlid
