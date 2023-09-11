import React from "react";
import { useForm } from "@formspree/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const ContactUs = () => {
  const SignupSchema = Yup.object().shape({
    fname: Yup.string("Enter your name")
      .max(50, "Too Long!")
      .min(2, "Too short")
      .required("A name is required"),
    lname: Yup.string().min(2, "Too short").max(50, "Too Long!"),
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email required"),
    message: Yup.string()
      .min(2, "Too short")
      .max(250, "Too Long!")
      .required("Please leave your feedback"),
  });

  //handleSubmit tiene su propia logica, por lo tanto al submit se le tiene que pasar esa funcion para que sea enviado
  // Tal vez seria posible hacerlo con funcion flecha pero es mas simple de esta forma
  const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT);
  if (state.succeeded) {
    return (
      <div className="vh-100">
        <h1 className="position-absolute top-50 start-50 translate-middle">
          Thanks for your feedback!
        </h1>
      </div>
    );
  }
  return (
    <Formik
      initialValues={{ email: "", fname: "", lname: "", message: "" }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-3">
                <div
                  className="card bg-dark text-white my-5 mx-auto"
                  style={{ borderRadius: "1rem", maxWidth: "900px" }}
                >
                  <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                    <h2
                      className="fw-bold mb-2 text-uppercase"
                      style={{ color: "#bdb284" }}
                    >
                      Contact Us
                    </h2>
                    <p className="text-white-50">
                      Please enter your info and we will contact you
                    </p>
                    <div className="col-12 p-3">
                      <Field
                        className="form-control"
                        name="fname"
                        type="text"
                        placeholder="First Name"
                      />
                      {errors.fname && touched.fname && errors.fname}
                    </div>
                    <div className="col-12 p-3">
                      <Field
                        name="lname"
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                      />
                      {errors.lname && touched.lname && errors.lname}
                    </div>
                    <div className="col-12 p-3">
                      <Field
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="col-12 form-group shadow-textarea p-3">
                      <Field
                        className="form-control z-depth-1"
                        type="text"
                        component="textarea"
                        name="message"
                        rows="3"
                        placeholder="Write something here..."
                      />
                      {errors.message && touched.message && errors.message}
                      <br />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-lg mx-2 px-5"
                      style={{ color: "#bdb284" }}
                      color="white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
