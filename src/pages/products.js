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
        <ProductsList />
      </div>
    </Layout>
  )
}

export default Products
