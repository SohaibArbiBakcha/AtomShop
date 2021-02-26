import React from "react"
import { Product } from "./Product"

import { useStaticQuery, graphql } from "gatsby"

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
  console.log(data)
  return (
    <div className="row">
      {data.products.edges.map(({ node: product }) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default Products
