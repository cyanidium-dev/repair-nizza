"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";

const TaskAndSolution = ({ task, solution }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  if (!task || !solution) return null;

  const getDescription = (description) => {
    if (!description?.[locale]) return "";

    return description[locale]
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
  };

  return (
    <Container className="pb-[94px] lg:pb-[150px] relative z-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8 lg:gap-5">
        {/* Task Card */}
        <div className="relative w-full md:w-[310px] h-[402px] md:h-[400px] lg:w-[590px] lg:h-[583px] rounded-[20px] overflow-hidden group">
          {task.image?.asset?.url && (
            <Image
              src={task.image.asset.url}
              alt={task.title?.[locale]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 310px, (max-width: 1024px) 310px, 590px"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[138px] lg:h-[189px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-4 pl-[25px] pr-10 lg:py-8 lg:pl-8 lg:pr-[92px]">
            <h3 className="font-arsenal font-normal text-base leading-[19px] text-primary-white uppercase mb-3 lg:text-[40px] lg:leading-[48px] lg:mb-5">
              {task.title?.[locale]}
            </h3>
            <p className="font-montserrat font-light text-xs leading-[15px] text-primary-white lg:text-base lg:leading-[19px]">
              {getDescription(task.description)}
            </p>
          </div>
        </div>

        {/* Solution Card */}
        <div className="relative w-full md:w-[310px] h-[402px] md:h-[400px] lg:w-[590px] lg:h-[583px] rounded-[20px] overflow-hidden group">
          {solution.image?.asset?.url && (
            <Image
              src={solution.image.asset.url}
              alt={solution.title?.[locale]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 310px, (max-width: 1024px) 310px, 590px"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[138px] lg:h-[189px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-4 pl-[25px] pr-10 lg:py-8 lg:pl-8 lg:pr-[92px]">
            <h3 className="font-arsenal font-normal text-base leading-[19px] text-primary-white uppercase mb-3 lg:text-[40px] lg:leading-[48px] lg:mb-5">
              {solution.title?.[locale]}
            </h3>
            <p className="font-montserrat font-light text-xs leading-[15px] text-primary-white lg:text-base lg:leading-[19px]">
              {getDescription(solution.description)}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TaskAndSolution;
