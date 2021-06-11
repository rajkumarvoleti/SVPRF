import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputTag from "./InputTag";
import { Formik } from "formik";
import * as yup from "yup";

class JoinUs extends React.Component {
  render() {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
      number: yup.string().required(),
      education: yup.string().required(),
      role: yup.string().required(),
      category: yup.string().required(),
      resume: yup.mixed().required(),
    });
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          number: "",
          education: "",
          role: "",
          category: "",
          resume: null,
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
        }) => (
          <Form noValidate onSubmit={handleSubmit} className="Join_Us">
            <div className="join_head">
              <h2>Join Us</h2>
            </div>
            <Form.Group controlId="validationFormik101">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={!!errors.name}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="number"
                type="number"
                placeholder="Enter number"
                value={values.number}
                onChange={handleChange}
                isValid={touched.number && !errors.number}
                isInvalid={!!errors.number}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEducation">
              <Form.Label>Higher Education</Form.Label>
              <Form.Control
                name="education"
                type="text"
                placeholder="Enter your qualifications"
                value={values.education}
                onChange={handleChange}
                isValid={touched.education && !errors.education}
                isInvalid={!!errors.education}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <select
                name="role"
                className="form-control"
                value={values.role}
                onChange={handleChange}
                isValid={touched.role && !errors.role}
                isInvalid={!!errors.role}
                feedback={errors.role}
              >
                <option value="1">Volunteer</option>
                <option value="2">Intern</option>
              </select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Intern Category</Form.Label>
              <select
                name="category"
                className="form-control"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
                isInvalid={!!errors.category}
                feedback={errors.category}
              >
                <option value="1">Social Media</option>
                <option value="2">Digital Marketing</option>
                <option value="3">Research</option>
                <option value="4">Data Analystics</option>
                <option value="5">Content Writing</option>
                <option value="6">Technical</option>
              </select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.File
                name="resume"
                type="file"
                className="resume"
                value={values.resume}
                onChange={handleChange}
                isValid={touched.resume && !errors.resume}
                feedback={errors.resume}
                isInvalid={!!errors.resume}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Skills</Form.Label>
              <InputTag />
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
