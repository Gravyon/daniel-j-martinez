import React from "react";
import { useForm } from "@formspree/react";
import { Formik, Form, Field } from "formik";
import "./styles.css";
import { Typography } from "@material-tailwind/react";
import { Slide } from "react-awesome-reveal";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const Contact = () => {
  const { t } = useTranslation();
  const signupSchema = Yup.object().shape({
    fname: Yup.string()
      .max(50, t("validation.fname.max"))
      .min(2, t("validation.fname.min"))
      .required(t("validation.fname.required")),
    email: Yup.string()
      .email(t("validation.email.email"))
      .required(t("validation.email.required"))
      .min(50,t("validation.email.min"))
      .max(254, t("validation.email.max")),
    message: Yup.string()
      .max(500, t("validation.message.max"))
      .min(2, t("validation.message.min"))
      .required(t("validation.message.required")),
  });
  const cardhover = {
    hover: { scale: 1.1 },
  };
  //handleSubmit tiene su propia logica, por lo tanto al submit se le tiene que pasar esa funcion para que sea enviado
  // Tal vez seria posible hacerlo con funcion flecha pero es mas simple de esta forma
  const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT);
  return (
    <Formik
      initialValues={{ email: "", fname: "", message: "" }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm, isSubmitting }) => (
        <Form>
          <Slide triggerOnce delay={100} direction="left" duration={1000}>
            <h1 className="flex m-4 p-2 mt-8">
              <Trans i18nKey="contact"></Trans>
            </h1>
          </Slide>
          <motion.div
            whileHover="hover"
            variants={cardhover}
            className="text-white bg-gray-900 my-5 mx-auto m-5 mt-5 mb-5 py-3 shadow-lg shadow-pink-600 max-w-[26rem] transition-all rounded-xl"
            style={{ maxWidth: "700px" }}
          >
            <div className="flex flex-col p-5 align-items-center mx-auto w-100">
              <Typography variant="h3" className="mb-2">
                <Trans i18nKey="talk"></Trans>
              </Typography>
              <div className="p-3">
                <Field
                  className="p-2"
                  name="fname"
                  type="text"
                  placeholder={t("fname")}
                />
                <div className="text-red-500 mt-2">
                  {errors.fname && touched.fname && errors.fname}
                </div>
              </div>
              <div className="p-3">
                <Field
                  className="p-2"
                  name="email"
                  type="email"
                  placeholder={t("email")}
                />
                <div className="text-red-500 mt-2">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className="shadow-textarea p-3">
                <Field
                  type="text"
                  component="textarea"
                  name="message"
                  rows="4"
                  className="p-2"
                  placeholder={t("message")}
                />
                <div className="text-red-500 mt-2">
                  {errors.message && touched.message && errors.message}
                </div>
                <br />
              </div>
              {state.succeeded ? (
                <div className="my-5 mx-auto m-5 mt-5 mb-5 py-3">
                  <Trans i18nKey="sent"></Trans>
                </div>
              ) : (
                <button
                  type="submit"
                  className="nav-text w-100 uppercase text-sm mx-2 py-2 px-4 bg-dark-purple font-bold "
                  size="lg"
                  // fullwidth={true}
                  disabled={isSubmitting}
                >
                  <Trans i18nKey="send"></Trans>
                </button>
              )}
            </div>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};
