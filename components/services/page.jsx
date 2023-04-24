"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { services } from "@/constants";

const Services = () => {
  const ServicesCard = ({ service, index }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "#222" }}
      icon={
        <div className="flex absolute justify-center w-full h-full">
          <service.icon className="!w-6 !h-6 md:!w-9 md:!h-9 sm:!w-7 sm:!h-7 text-slate-100 !top-0 !left-0 !ml-0 !mt-2" />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-white text-[24px] float-right" dir="rtl">
          {service.title}
        </h3>
      </div>
      <ul className="list mt-5 ml-5 space-y-2" dir="rtl">
        <li
          key={index}
          className="text-white-100 text-[14px] tracking-wider pl-1 float-right"
          dir="rtl"
        >
          {service.text}
        </li>
      </ul>
    </VerticalTimelineElement>
  );

  return (
    <section id="services" className="!mb-20">
      <div className="text-center mt-10">
        <h2 className="!text-slate-700 dark:!text-slate-100">خدماتنا</h2>
      </div>

      <div className="flex flex-col mt-12" dir="ltr">
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Services;
