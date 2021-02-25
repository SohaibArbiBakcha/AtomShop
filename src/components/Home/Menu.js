import GatsbyImage from "gatsby-image"
import React, { useState } from "react"
import { Title } from "../Global/Title"

const Menu = ({ items }) => {
  const getCategories = products => {
    const tempProduct = products.map(products => products.node.category)
    const tempCategories = new Set(tempProduct)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    return categories
  }

  const [state, setstate] = useState({
    items: items.edges,
    shopItems: items.edges,
    categories: getCategories(items.edges),
  })

  const handleItem = category => {
    let tempItem = [...state.items]
    if (category === "all") {
      setstate({
        items: tempItem,
        shopItems: tempItem,
        categories: getCategories(tempItem),
      })
    } else {
      let itemsFilter = tempItem.filter(
        ({ node }) => node.category === category
      )
      setstate({
        items: tempItem,
        shopItems: itemsFilter,
        categories: getCategories(tempItem),
      })
    }
  }
  if (state.items.length > 0) {
    return (
      <section className="menu min-vh-100 py-5">
        <div className="container">
          <Title title="New Products" />
          {/* categories */}
          <div className="row">
            <div className="col-10 mx-auto text-center">
              {state.categories.map((category, index) => {
                {
                  return (
                    <button
                      type="button"
                      className="btn btn-spy text-capitalize m-2"
                      key={index}
                      onClick={() => {
                        handleItem(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                }
              })}
            </div>
          </div>
          {/* items */}
          <div className="row">
            {state.shopItems.map(({ node }) => {
              return (
                <div className="col-11 col-md-6 my-3 d-flex" key={node.id}>
                  <div>
                    <GatsbyImage fixed={node.image.fixed} />
                  </div>
                  {/* item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      {/* <h6 className="mb-0 lh-1">
                        <span>{node.price} MAD</span>
                        <span>{node.price} MAD</span>
                      </h6> */}
                    </div>
                    <div>
                      <h6 className="my-2">
                        <small>
                          <span>{node.price} MAD</span>

                          <span className="ms-5 p-0 bg-danger text-white">
                            <s>{Math.floor(node.price + node.price / 5)} MAD</s>
                          </span>
                        </small>
                      </h6>
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
