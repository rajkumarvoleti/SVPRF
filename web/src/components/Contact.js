import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: false,
      contact: "",
      email: "",
      emailError: false,
      emailError2: false,
      message: "",
      messageError: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isValidEmail(email) {
    // eslint-disable-next-line no-useless-escape
    return email.length > 0;
  }

  // isValidcontact(contactno) {
  //   return /^[6-9]\d{9}$/.test(contactno);
  // }

  handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });

    if (value.length <= 0 && name === "name") {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }

    if (value.length <= 0 && name === "email") {
      this.setState({ emailError: true });
      this.setState({ emailError2: false });
    } else {
      this.setState({ emailError: false });
      if (this.isValidEmail(value)) {
        this.setState({ emailError2: false });
      } else {
        this.setState({ emailError2: true });
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      emailError2,
      messageError,
    } = this.state;

    this.setState({ nameError: name ? false : true });
    this.setState({ messageError: message ? false : true });
    this.setState({ emailError: email ? false : true });
    if (email && !emailError) {
      this.setState({ emailError2: this.isValidEmail(email) ? false : true });
    }

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !emailError2 &&
      !messageError
    ) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }

    e.preventDefault();
  }

  render() {
    const {
      // name,
      // email,
      // message,
      nameError,
      emailError,
      emailError2,
      messageError,
      formValid,
    } = this.state;

    if (!formValid) {
      return (
        <div className="contact">
          <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 ">
            <div className="card-header  border-0 text-center text-uppercase">
              <h3 className="contact_head">Contact Us</h3>
            </div>
            <div className="card-body">
              <form
                action="/"
                onSubmit={(e) => this.handleSubmit(e)}
                encType="multipart/form-data"
                autoComplete="off"
              >
                <div className="form-group">
                  <label className="mb-0">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {nameError ? (
                    <div className="alert alert-danger mt-2">
                      Name is a required field.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <label className="mb-0">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {emailError ? (
                    <div className="alert alert-danger mt-2">
                      Email is a required field.
                    </div>
                  ) : (
                    ""
                  )}
                  {emailError2 ? (
                    <div className="alert alert-danger mt-2">
                      Email invalid.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <label className="mb-0"> Contact Number (Optional)</label>
                  <input
                    name="contact"
                    type="text"
                    className="form-control"
                    placeholder="Contact"
                    onChange={this.handleChange}
                    value={this.state.contact}
                  />
                </div>
                <div className="form-group message">
                  <label className="mb-0">
                    Message<span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {messageError ? (
                    <div className="alert alert-danger mt-2">
                      Message is a required field.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="submit">
                  <p className="text-center mb-0">
                    <input
                      type="submit"
                      className="btn btn-primary btn-lg  text-uppercase"
                      value="Submit Now"
                    />
                  </p>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div className="text-center"></div>
        </div>
      );
    } else {
      return (
        <div className="contact">
          <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 ">
            <div className="card-header  border-0 text-center text-uppercase">
              <h3 className="contact_head">Contact Us</h3>
            </div>
            <div className="card-body">
              <div className="thankyou">
                Thank for your message. We will contact you soon.
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ContactForm;
