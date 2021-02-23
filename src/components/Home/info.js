import React from "react"
import { Link } from "gatsby"
import { Title } from "../Global/Title"

export const Info = () => {
  return (
    <section className="info py-5 mt-5">
      <div className="container">
        <Title title="About Smart Home" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos
              in quidem commodi sit, cumque ut? Totam aliquam minima nostrum
              laudantium cum dolores nulla labore, accusamus quasi magnam
              mollitia consectetur nesciunt distinctio aspernatur repellendus
              facilis voluptas autem fugit, fugiat fuga. Ipsum, alias illo
              doloremque possimus repellat vel. Qui, amet harum?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-spy ">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
