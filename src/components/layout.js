import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "./bootstrap.min.css"
import { Navbar } from "./Global/Navbar"
import { Footer } from "./Global/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
