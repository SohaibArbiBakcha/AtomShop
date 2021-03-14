import React from "react"
import { Title } from "../Global/Title"
import emailjs from "emailjs-com"
import swal from "sweetalert"

const ContactFrom = () => {
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "Atomshop",
        "template_luy3g37",
        e.target,
        "user_837MLOlU1JhnQCYKbSiOL"
      )
      .then(
        result => {
          swal({
            title: "Good job!",
            text: "Messege sent successfully",
            icon: "success",
            button: "close",
          })
          e.target.reset()
        },
        error => {
          swal({
            title: "Oops ... !",
            text: "Messege was not sent successfully",
            icon: "error",
            button: "close",
          })
        }
      )
  }
  return (
    <section className="contact py-5">
      <Title title="Contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form onSubmit={sendEmail}>
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                className="form-control"
                name="name"
                placeholder="john smith"
              />
            </div>
            {/* mail */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                required
                rows="5"
                placeholder="Your Description"
              ></textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-spy btn-block text-capitalize mt-5 mb-4 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFrom
