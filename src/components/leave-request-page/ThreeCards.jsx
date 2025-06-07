"use client";

import { useTranslations } from "next-intl";
import { Field } from "formik";

const CustomRadio = ({ name, value, label }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <Field name={name} value={value}>
      {({ field }) => (
        <>
          <input
            type="radio"
            {...field}
            value={value}
            checked={field.value === value}
            className="hidden"
          />
          <div className="w-4 h-4 border border-primary-black rounded-full flex items-center justify-center">
            {field.value === value && (
              <div className="w-2 h-2 bg-primary-black rounded-full" />
            )}
          </div>
        </>
      )}
    </Field>
    <span className="font-montserrat font-normal text-sm text-primary-black leading-5">
      {label}
    </span>
  </label>
);

const Card = ({
  title,
  description,
  radioName,
  inputName,
  inputPlaceholder,
  customTitle,
}) => {
  const t = useTranslations("leaveRequest.cards");
  let options;

  if (radioName === "timeline") {
    options = [
      { value: "asap", label: t("timeline.options.asap") },
      { value: "month", label: t("timeline.options.month") },
      { value: "threeMonths", label: t("timeline.options.threeMonths") },
      { value: "notSure", label: t("timeline.options.notSure") },
    ];
  } else {
    options = [
      { value: "small", label: t(`${radioName}.options.small`) },
      { value: "medium", label: t(`${radioName}.options.medium`) },
      { value: "large", label: t(`${radioName}.options.large`) },
      { value: "extraLarge", label: t(`${radioName}.options.extraLarge`) },
    ];
  }

  return (
    <div className="p-6 border border-primary-black rounded-xl w-[310px] lg:w-[387px] flex flex-col">
      <div className="flex-grow">
        <h3 className="font-arsenal text-[28px] font-normal uppercase leading-[34px] mb-2 lg:text-[32px] lg:leading-[38px]">
          {title}
        </h3>
        <p className="font-arsenal font-normal text-base leading-[19px] mb-[34px] uppercase">
          {description}
        </p>

        <div className="flex flex-col gap-5 mb-8 lg:mb-[32px]">
          {options.map((option) => (
            <CustomRadio
              key={option.value}
              name={radioName}
              value={option.value}
              label={option.label}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <h4 className="font-arsenal font-normal text-xl text-primary-black leading-[19px] mb-5">
          {customTitle}
        </h4>
        <Field
          name={inputName}
          className="pt-[5px] pb-[7px] px-3 border border-primary-black bg-transparent rounded-[32px] w-[262px] lg:w-[339px] h-[32px] placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-black placeholder:text-sm placeholder:opacity-70 placeholder:leading-5"
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  );
};

const ThreeCards = () => {
  const t = useTranslations("leaveRequest.cards");

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 py-[94px] lg:py-[134px] lg:gap-5 lg:flex-nowrap">
      <Card
        title={t("area.title")}
        description={t("area.description")}
        radioName="area"
        inputName="exactArea"
        inputPlaceholder={t("area.placeholder")}
        customTitle={t("area.customTitle")}
      />

      <Card
        title={t("budget.title")}
        description={t("budget.description")}
        radioName="budget"
        inputName="exactBudget"
        inputPlaceholder={t("budget.placeholder")}
        customTitle={t("budget.customTitle")}
      />

      <Card
        title={t("timeline.title")}
        description={t("timeline.description")}
        radioName="timeline"
        inputName="exactTimeline"
        inputPlaceholder={t("timeline.placeholder")}
        customTitle={t("timeline.customTitle")}
      />
    </div>
  );
};

export default ThreeCards;
