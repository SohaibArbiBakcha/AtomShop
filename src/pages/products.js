import React from "react"
import { Title } from "../components/Global/Title"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Products = () => {
  return (
    <Layout>
      <SEO title="Produit" />
      <div className="container py-5">
        <Title title="here is our Products" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
