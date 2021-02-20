import React from "react"

export const Title = ({ title }) => {
  return (
    <div className="row ">
      <div className="col text-center mb-3">
        <h1 className="display-3 text-capitalze font-weight-bold">{title}</h1>
      </div>
    </div>
  )
}
