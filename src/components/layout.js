import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "./bootstrap.min.css"
import { Navbar } from "./Global/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
