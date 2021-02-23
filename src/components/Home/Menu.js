import GatsbyImage from "gatsby-image"
import React, { useState } from "react"
import { Title } from "../Global/Title"

const Menu = ({ items }) => {
  const [state, setstate] = useState({
    items: items.edges,
    shopItems: items.edges,
  })
  console.log(state.items.length)
  if (state.items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="New Product" />
          {/* categories */}
          {/* items */}
          <div className="row">
            {state.items.map(({ node }) => {
              return (
                <div className="col-11 col-md-6 my-3 d-flex" key={node.id}>
                  <div>
                    <GatsbyImage fixed={node.image.fixed} />
                  </div>
                  {/* item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0">${node.price} MAD</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="New Product" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capotalize">
              <h1>there no Items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
