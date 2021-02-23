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
              Les principaux objectifs de la maison intelligente sont : le
              confort et la sécurité. D’un côté, la domotique permet d’optimiser
              le confort de vie des occupants car celle-ci simplifie les tâches
              du quotidien. Grâce à elle par exemple, il n’y a plus à bouger du
              canapé pour activer le chauffage ou pour fermer les stores. Et il
              en va de même lorsqu’il y a lieu de sortir de la maison car on n’a
              plus besoin de descendre de la voiture pour ouvrir ou pour fermer
              le portail.
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
