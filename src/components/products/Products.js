import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const getProducts = graphql`
  query {
    products: allContentfulShopProducts {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 1024) {
              src
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(getProducts)

  const [state, setstate] = useState({
    produts: data.products.edges,
    filterPro: data.products.edges,
  })
  console.log(state)
  const handleChangeInput = e => {
    let search = e.target.value.toLowerCase()
    let produit = state.produts
    console.log(search)
    let produits = produit.filter(({ node: item }) => {
      return String(item.title).toLowerCase().includes(search)
    })

    setstate({
      ...state,
      filterPro: produits,
    })
    console.log(produits)
  }
  console.log(state.filterPro.length)
  if (state.filterPro.length > 0) {
    return (
      <div>
        <div className="row ">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="input-group mb-3">
              <input
                onChange={handleChangeInput}
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <div className="row">
          {state.filterPro.map(({ node: product }) => {
            return (
              <div
                key={product.id}
                className="col-10 col-sm-8 col-ms-6 col-lg-4 mx-auto my-3"
              >
                <div className="card" style={{ minHeight: "100%" }}>
                  <Img fluid={product.image.fluid} className="card-img-top" />
                  <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>
                      <small>
                        <span>{product.price} MAD</span>
                        <span className="ms-5 p-0 bg-danger text-white">
                          <s>
                            {Math.floor(product.price + product.price / 5)} MAD
                          </s>
                        </span>
                      </small>
                    </h6>
                  </div>
                  <div className="row d-flex justify-content-around mb-2">
                    <button className="col-4 btn btn-spy ">Add to cart</button>
                    <Link className="col-4 btn btn-spy" to="">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="row min-vh-90">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="input-group mb-3">
              <input
                onChange={handleChangeInput}
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <h2>No products</h2>
          <p>
            contact us if want this products <Link to="/contact">here</Link>
          </p>
        </div>
      </>
    )
  }
}

export default Products
