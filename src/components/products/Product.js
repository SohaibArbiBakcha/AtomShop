import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-ms-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>
            <small>
              <span>{product.price} MAD</span>
              <span className="ms-5 p-0 bg-danger text-white">
                <s>{Math.floor(product.price + product.price / 5)} MAD</s>
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
}
