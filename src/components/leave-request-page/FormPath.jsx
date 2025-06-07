"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import MainForm from "./MainForm";
import SoloInput from "./SoloInput";
import ThreeCards from "./ThreeCards";
import Container from "../Container";

const FormPath = () => {
  const t = useTranslations("leaveRequest.mainForm.validation");

  const validationSchema = Yup.object({
    phone: Yup.string().required(t("phoneRequired")).min(8, t("phoneInvalid")),
  });

  const initialValues = {
    customDescription: "",
    area: "",
    exactArea: "",
    budget: "",
    exactBudget: "",
    timeline: "",
    exactTimeline: "",
    name: "",
    phone: "",
    email: "",
    comment: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Здесь будет логика отправки формы
        console.log("Form submitted:", values);
        setSubmitting(false);
      }}
    >
      <Form>
        <SoloInput />
        <Container>
          <ThreeCards />
        </Container>
        <MainForm />
      </Form>
    </Formik>
  );
};

export default FormPath;
