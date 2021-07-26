import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputTag from "./InputTag";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import base from "../base";
import { firebaseApp } from "../base";
const Id = Date.now();
class JoinUs extends React.Component {
  constructor(props) {
    super(props);
    this.internRef = React.createRef();
    this.state = {
      submitted: false,
      intern: false,
      value: {
        name: "",
        email: "",
        number: "",
        education: "",
        role: "",
        category: "",
        resume: "",
        tags: [],
      },
      form_value: [],
    };
  }
  nameRef = React.createRef();
  componentDidMount() {
    window.scrollTo(0, window.innerHeight - 75);
    const nameRef = this.nameRef;
    const length = nameRef.current.value.length;
    nameRef.current.focus();
    if (length) nameRef.setSelectionRange(length, length);
    if (!this.state.intern) this.internRef.current.style.display = "none";
  }
  componentDidUpdate() {
    const page = this.props.page;
    if (page !== "/join_us") this.props.history.push(page);
    if (this.state.submitted) {
      window.scrollBy(0, -500);
    }

    // disappear
    if (!this.state.intern) this.internRef.current.style.display = "none";
    if (this.state.intern) this.internRef.current.style.display = "flex";
  }

  getTags = (obj) => {
    var value = { ...this.state.value };
    value.tags = [...obj];
    this.setState({ value });
  };
  prevent = (e) => {
    e.preventDefault();
  };
  updateState = (e, str) => {
    var value = { ...this.state.value };
    const form_Id = this.state.value.name + Id;
    if (str === "resume") {
      var file = e.target.files[0];
      firebaseApp
        .storage()
        .ref(`resume/${form_Id}`)
        .put(file)
        .on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
          },
          (error) => this.setState({ error: error.message })
        );
      value[str] = file;
    } else value[str] = e.target.value;
    this.setState({ value });
  };
  saveToLocal = (values) => {
    var form_value = this.state.form_value;
    const form_Id = this.state.value.name + Id;
    const tags = this.state.value.tags;
    values["skills"] = tags;
    form_value.push(values);
    this.setState({ form_value });
    localStorage.setItem(form_Id, JSON.stringify({ ...this.state.form_value }));
    base.post(form_Id, {
      data: values,
    });
  };
  render() {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = yup.object().shape({
      name: yup.string().required("name is required"),
      email: yup.string().email("Invalid email").required("Required"),
      number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .test((val) => val && val.length === 10),
      education: yup.string().required(),
      role: yup.string().required(),
      category: yup.string().when("role", {
        is: "Intern",
        then: yup.string().required(),
        otherwise: yup.string(),
      }),
      resume: yup.mixed().required(),
      tag: yup.string(),
    });
    return (
      <div className="JoinUsMain">
        <Formik
          validationSchema={schema}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            await this.saveToLocal(values);
            this.setState({ submitted: true });
          }}
          validator={() => ({})}
          initialValues={{
            name: "",
            email: "",
            number: "",
            education: "",
            role: "",
            category: "",
            resume: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isSubmitting,
            errors,
            setFieldValue,
          }) => (
            <Form
              onSubmit={handleSubmit}
              noValidate
              className={this.state.submitted ? "none" : "Join_Us"}
            >
              <div className={isSubmitting ? "lds-ring" : "lds-ring isLoading"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="join_head">
                <h2>Join Us</h2>
              </div>
              <Form.Group controlId="validationFormik101">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  ref={this.nameRef}
                  type="text"
                  className={
                    touched.name
                      ? errors.name
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                  placeholder="Enter Name"
                  value={values.name}
                  autoFocus
                  onChangeCapture={(e) => {
                    this.updateState(e, "name");
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  <ErrorMessage name="name" />
                </p>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  className={
                    touched.email
                      ? errors.email
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    this.updateState(e, "email");
                  }}
                />
                <p className="error">
                  <ErrorMessage name="email" />
                </p>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  name="number"
                  type="number"
                  placeholder="Enter number"
                  className={
                    touched.number
                      ? errors.number
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    this.updateState(e, "number");
                  }}
                />
                <p className="error">
                  <ErrorMessage name="number" />
                </p>
              </Form.Group>
              <Form.Group controlId="formBasicEducation">
                <Form.Label>Higher Education</Form.Label>
                <Form.Control
                  name="education"
                  type="text"
                  className={
                    touched.education
                      ? errors.education
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                  placeholder="Enter your qualifications"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    this.updateState(e, "education");
                  }}
                  value={values.education}
                />
                <p className="error">
                  <ErrorMessage name="education" />
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <select
                  style={{ display: "block" }}
                  name="role"
                  className={
                    touched.role
                      ? errors.role
                        ? "is-invalid form-control"
                        : "is-valid form-control"
                      : "form-control"
                  }
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    if (e.target.value === "Intern")
                      this.setState({ intern: true });
                    else this.setState({ intern: false });
                    this.updateState(e, "role");
                  }}
                >
                  <option hidden defaultValue value="">
                    -- select an option --
                  </option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Intern">Intern</option>
                </select>
                <p className="error">
                  <ErrorMessage name="role" />
                </p>
              </Form.Group>
              <Form.Group ref={this.internRef}>
                <Form.Label>Intern Category</Form.Label>
                <select
                  disabled={!this.state.intern}
                  name="category"
                  className={
                    touched.category
                      ? errors.category
                        ? "is-invalid form-control"
                        : "is-valid form-control"
                      : "form-control"
                  }
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    this.updateState(e, "category");
                  }}
                >
                  <option hidden defaultValue value>
                    -- select an option --
                  </option>
                  <option value="Social Media">Social Media</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Research">Research</option>
                  <option value="Data Analystics">Data Analystics</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Technical">Technical</option>
                </select>
                <p className="error">
                  <ErrorMessage name="category" />
                </p>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Resume</Form.Label>
                <Form.File
                  name="resume"
                  type="file"
                  className={
                    touched.resume
                      ? errors.resume
                        ? "is-invalid resume"
                        : "is-valid resume"
                      : "resume"
                  }
                  value={values.resume}
                  onChangeCapture={(e) => {
                    this.updateState(e, "resume");
                    setFieldValue("resume", e.currentTarget.files[0]);
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  <ErrorMessage name="resume" />
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Skills</Form.Label>
                <InputTag
                  getTags={this.getTags}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onChangeCapture={(e) => {
                    this.updateState(e, "tag");
                  }}
                  name="tag"
                  value={values.tag}
                  tags={this.state.value.tags}
                />
              </Form.Group>
              <Form.Group className="submit">
                <Button variant="primary" type="submit" className="btn">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
        <div className={this.state.submitted ? "ThankYou" : "none"}>
          <p>Thank you for submitting the form</p>
        </div>
      </div>
    );
  }
}

export default JoinUs;
