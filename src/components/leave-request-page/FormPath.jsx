"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import axios from "axios";
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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Форматируем данные для более читаемого вида в Telegram
      const formattedMessage = {
        form_type: "Leave Request Form",
        name: values.name || "Not provided",
        phone: values.phone,
        email: values.email || "Not provided",
        repair_description: values.customDescription || "Not provided",
        area_type: values.area || "Not selected",
        exact_area: values.exactArea || "Not provided",
        budget_range: values.budget || "Not selected",
        exact_budget: values.exactBudget || "Not provided",
        timeline: values.timeline || "Not selected",
        exact_timeline: values.exactTimeline || "Not provided",
        additional_comment: values.comment || "No comment",
      };

      const response = await axios.post("/api/send-message", formattedMessage);

      if (response.data.success) {
        resetForm();
        // Можно добавить состояние для отображения сообщения об успехе
        alert("Заявка успешно отправлена!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
