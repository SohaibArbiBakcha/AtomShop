import React from "react"
import { Title } from "../components/Global/Title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsList from "../components/products/Products"

const Products = () => {
  return (
    <Layout>
      <SEO title="Produit" />
      <div className="container py-5">
        <Title title="here is our Products" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <ProductsList />
      </div>
    </Layout>
  )
}

export default Products
