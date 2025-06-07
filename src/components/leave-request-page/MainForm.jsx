"use client";

import { useTranslations } from "next-intl";
import { Field, ErrorMessage } from "formik";
import Image from "next/image";
import motif from "../../../public/images/image/leave-request-img/leave-motif-desk-2.png";
import Container from "../Container";

const MainForm = () => {
  const t = useTranslations("leaveRequest.mainForm");

  return (
    <Container className="relative">
      <div className="pb-[94px] lg:pb-[150px]">
        <div className="p-6 border border-primary-black rounded-xl w-[310px] md:w-[571px] md:mx-auto lg:w-[1200px]">
          <h2 className="font-arsenal text-[28px] font-normal uppercase leading-[37px] mb-8 md:text-center lg:text-[32px] lg:leading-[24px] lg:text-left">
            {t("title")}
          </h2>
          <div className="w-[262px] md:mx-auto lg:mx-0 lg:w-full">
            <div className="flex flex-col gap-6 w-[262px] mb-8 lg:flex-row lg:justify-between lg:w-[1152px] lg:gap-10">
              <div>
                <label className="font-arsenal font-normal text-[18px] lg:text-xl leading-[16px] mb-5 block">
                  {t("labels.name")}
                </label>
                <Field
                  name="name"
                  className="w-[262px] lg:w-[340px] h-[42px] pt-[8px] pb-[10px] px-3 border border-primary-black bg-transparent rounded-[32px] lg:mb-0 placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-black placeholder:text-xs placeholder:opacity-70 placeholder:leading-6"
                  placeholder={t("placeholders.name")}
                />
              </div>

              <div className="relative ">
                <label className="font-arsenal font-normal text-[18px] lg:text-xl leading-[16px] mb-5 block">
                  {t("labels.phone")}
                </label>
                <Field
                  name="phone"
                  className="w-[262px] lg:w-[340px] h-[42px] pt-[8px] pb-[10px] px-3 border border-primary-black bg-transparent rounded-[32px] lg:mb-0 placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-black placeholder:text-xs placeholder:opacity-70 placeholder:leading-6"
                  placeholder={t("placeholders.phone")}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs font-montserrat absolute bottom-[-17px] left-0"
                />
              </div>

              <div>
                <label className="font-arsenal font-normal text-[18px] lg:text-xl leading-[16px] mb-5 block">
                  {t("labels.email")}
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-[262px] lg:w-[340px] h-[42px] pt-[8px] pb-[10px] px-3 border border-primary-black bg-transparent rounded-[32px] lg:mb-0 placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-black placeholder:text-xs placeholder:opacity-70 placeholder:leading-6"
                  placeholder={t("placeholders.email")}
                />
              </div>
            </div>

            <div>
              <label className="font-arsenal font-normal text-[18px] lg:text-xl text-primary-black leading-[16px]">
                {t("labels.comment")}
              </label>
              <Field
                as="textarea"
                name="comment"
                className="w-[262px] h-[126px] p-3 border mt-[18px] md:w-[262px] lg:w-full border-primary-black bg-transparent rounded-lg resize-none placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-black placeholder:text-xs placeholder:opacity-70 placeholder:leading-[15px]"
                placeholder={t("placeholders.comment")}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-[262px] h-[47px] lg:w-[391px] lg:h-[52px] mt-8 lg:mt-9 rounded-[32px] flex justify-center items-center mx-auto font-montserrat font-light text-sm bg-primary-black text-primary-white hover:bg-primary-white hover:text-primary-black hover:border-primary-black hover:border transition-colors duration-300"
        >
          {t("button")}
        </button>
      </div>
      <Image
        src={motif}
        alt="motif"
        className="hidden absolute bottom-0 left-0 -z-10"
      />
    </Container>
  );
};

export default MainForm;
