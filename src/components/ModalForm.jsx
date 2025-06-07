"use client";

import { useTranslations } from "next-intl";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import Image from "next/image";
import motif1 from "../../public/images/image/modal-motif-1.png";
import motif2 from "../../public/images/image/modal-motif-2.png";

const ModalForm = ({ isOpen, closeModal }) => {
  const t = useTranslations("modalForm");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, t("validation.name")),
    phone: Yup.string()
      .min(10, t("validation.phone"))
      .max(15, t("validation.phone"))
      .required(t("validation.required")),
    message: Yup.string(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Здесь будет логика отправки формы
    console.log(values);
    setSubmitting(false);
    resetForm();
    setIsSuccess(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleContactsClick = () => {
    closeModal();
    router.push("/contacts");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-primary-white mx-auto rounded-lg py-8 px-6 max-w-[310px] md:max-w-[463px] lg:px-[54px]">
        {!isSuccess ? (
          <>
            <h3 className="font-arsenal font-normal text-3xl md:text-3xl lg:text-[40px] text-center text-primary-black uppercase mb-[26px] md:w-[371px]">
              {t("title")}
            </h3>

            <Formik
              initialValues={{ name: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex flex-col items-center gap-[14px]">
                  <div className="relative">
                    <Field
                      type="text"
                      name="name"
                      placeholder={t("placeholders.name")}
                      className="px-4 py-[10px] border border-[#989898] w-[260px] md:w-[293px] rounded-[32px] font-montserrat text-sm bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-[10px] absolute bottom-[-14px] left-0">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder={t("placeholders.phone")}
                      className="px-4 py-[10px] border border-[#989898] w-[260px] md:w-[293px] rounded-[32px] font-montserrat text-sm bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 text-[10px] absolute bottom-[-14px] left-0">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder={t("placeholders.message")}
                      className="px-4 py-2 border border-[#989898] w-[260px] md:w-[293px] rounded-lg font-montserrat text-sm h-32 resize-none bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-black text-primary-white font-montserrat font-normal w-[260px] md:w-[293px] h-[52px] text-sm mt-3 rounded-[32px] hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300"
                  >
                    {t("button")}
                  </button>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <div className="flex flex-col items-center text-center">
            <h3 className="font-arsenal font-normal text-[32px] leading-[35px] text-center text-primary-black uppercase mb-5 lg:text-[37px] lg:leading-[43px] lg:w-full">
              {t("success.title")}
            </h3>
            <p className="font-montserrat font-light text-xs text-center text-primary-black mb-[83px] w-[215px] lg:text-sm lg:w-[318px] lg:mb-[87px]">
              {t("success.description")}
            </p>
            <button
              onClick={handleContactsClick}
              className="relative z-40 bg-primary-black text-white font-montserrat font-normal leading-5 text-sm w-[270px] h-[52px] rounded-[32px] hover:bg-transparent hover:border-primary-black hover:text-primary-black hover:border transition-all duration-300"
            >
              {t("success.button")}
            </button>
            <Image
              src={motif1}
              alt="motif"
              className="absolute bottom-0 left-0 z-30"
            />
            <Image
              src={motif2}
              alt="motif"
              className="absolute bottom-0 right-0 z-30"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
