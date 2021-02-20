import React, { useState } from "react"
import { Link } from "gatsby"
import { HiShoppingCart } from "react-icons/hi"
import logo from "../../images/logo.svg"

export const Navbar = () => {
  const [state, setstate] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "Home" },
      { id: 2, path: "/about", text: "About" },
    ],
  })

  const navBarHandler = () => {
    // const toggol = document.querySelector(".toggle")
    // toggol.classList.toggle("show")
    state.navbarOpen
      ? setstate({
          navbarOpen: false,
          css: "collapse navbar-collapse",
          links: [...state.links],
        })
      : setstate({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
          links: [...state.links],
        })
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light px-3">
      <Link to="/" className="navbar-brand ">
        <img src={logo} alt="AtomShop " />
      </Link>
      <button className=" navbar-toggler" type="button" onClick={navBarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`toggle ${state.css}`}>
        <ul className="navbar-nav mx-auto">
          {state.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <HiShoppingCart className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
