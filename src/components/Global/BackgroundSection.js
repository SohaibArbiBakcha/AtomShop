import BackgroundImage from "gatsby-background-image"
import React from "react"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bolder">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundImage.defaultProps = {
  title: "",
  styleClass: "default-background",
}

export default BackgroundSection
