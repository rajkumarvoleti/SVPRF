import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputTag from "./InputTag";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import base from "../base";
import { firebaseApp } from "../base";
const Id = "form" + Date.now();
class JoinUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (str === "resume") {
      var file = e.target.files[0];
      console.log(file);
      firebaseApp
        .storage()
        .ref(`images/${Id}`)
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
    const tags = this.state.value.tags;
    values["tags"] = tags;
    form_value.push(values);
    this.setState({ form_value });
    localStorage.setItem(Id, JSON.stringify({ ...this.state.form_value }));
    base.post(Id, {
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
      <Formik
        validationSchema={schema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          this.saveToLocal(values);
          this.prevent();
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
          isValid,
          errors,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} noValidate className="Join_Us">
            <div className="join_head">
              <h2>Join Us</h2>
            </div>
            <Form.Group controlId="validationFormik101">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                className={
                  touched.name ? (errors.name ? "is-invalid" : "is-valid") : ""
                }
                placeholder="Enter Name"
                value={values.name}
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
            <Form.Group>
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
    );
  }
}

export default JoinUs;
