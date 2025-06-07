"use client";

import { Formik, Form } from "formik";
import MainForm from "./MainForm";
import SoloInput from "./SoloInput";
import ThreeCards from "./ThreeCards";
import Container from "../Container";

const FormPath = () => {
  const initialValues = {
    customDescription: "",
    area: "",
    exactArea: "",
    budget: "",
    exactBudget: "",
    timeline: "",
    exactTimeline: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        // здесь будет логика отправки формы
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
