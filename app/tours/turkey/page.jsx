import Image from "next/image";
import React from "react";
import "./style.scss";
import { turkeyTour } from "@/constants";

const EgyptTour = () => {
  const { titles, points, images } = turkeyTour[0];
  console.log(images);
  const Cards = ({ title, index }) => {
    if (index % 2 === 0) {
      return (
        <>
          <div className="col-md-7">
            <h5 key={index + 8} className="font-bold">{title}</h5>

            <p className="!text-slate-900 dark:!text-gray-300" key={index + 1}>
              {points[index]}
            </p>
          </div>

          <div className="col-md-5 img-col">
            <div className="info-img">
              <Image
                src={images[index]}
                alt="tour image"
                fil="true"
                className={`shadow ${index % 2 == 0 ? "left" : "right"}`}
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-md-5 img-col">
            <div className="info-img">
              <Image
                src={images[index]}
                alt="tour image"
                fil="true"
                className={`shadow ${index % 2 == 0 ? "left" : "right"}`}
              />
            </div>
          </div>
          <div className="col-md-7">
            <h5 key={index + 5} className="font-bold">{title}</h5>
            <p key={index + 4} className="!text-slate-900 dark:!text-gray-300">{points[index]}</p>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <section className="w-full rounded-md">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={images[1]} alt="Tour images" />
            </div>
            <div className="carousel-item">
              <Image src={images[2]} alt="Tour images" />
            </div>
            <div className="carousel-item">
              <Image src={images[3]} alt="Tour images" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <article className="bg-[#597cd6a8]">
        <section>
          <div className="inner-wrap max-w-3xl py-10 px-7 text-center mx-auto dark:!text-slate-100">
            <h1 className="dark:!text-white font-semibold leading-10 mb-4">
              رحلة إلى مدينة إسطنبول في تركيا
            </h1>
            <p>
              إسطنبول هي واحدة من أكبر و أجمل مدن تركيا وهي مصنفة ضمن أكثر المدن
              السياحية جذباً للسياح في العالم وتُعتبر إسطنبول الخيار الأول
              للسياح الذين يفكرون في الذهاب إلى تركيا. ستكون جولتنا في المعالم
              السياحية التالية:
            </p>
          </div>
        </section>
        <div className="container info px-4">
          <div className="row py-5">
            {titles.map((title, index) => (
              <Cards index={index} title={title} key={index + 2} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default EgyptTour;
