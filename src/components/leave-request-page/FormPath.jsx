"use client";

import { Formik, Form } from "formik";
import MainForm from "./MainForm";
import SoloInput from "./SoloInput";
import ThreeCards from "./ThreeCards";

const FormPath = () => {
  const initialValues = {
    customDescription: "",
    // здесь будут добавляться другие поля формы по мере создания компонентов
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
        <ThreeCards />
        <MainForm />
      </Form>
    </Formik>
  );
};

export default FormPath;
