"use client";
import Button from "./Button";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Card = ({ title, text, img, price, link }) => {
  return (
    <div className="col-md-6">
      <Tilt
        scale={1}
        glareEnable={true}
        glareBorderRadius="40px"
        glareColor="#4d58eea8"
        tiltAxis="x"
        className="rounded-[36px]"
      >
        <div className="card !min-h-[530px] text-center bg-slate-50 dark:!bg-slate-700 !rounded-[40px]">
          <div
            className="head"
            style={{
              clipPath:
                "polygon(0px 0px, 100% 0px, 101.75% 82.27%, -10px 98.66%)",
            }}
          >
            <Image
              src={img}
              className="card-img-top"
              alt="Egypt tour"
              loading="eager"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title dark:!text-white">{title}</h5>
            <p className="card-text dark:!text-slate-200">{text}</p>
            <p className="text-success">السعر: {price}$</p>
            <Button extraClass="!bg-[#16aeca]">
              <Link title="التفاصيل" className=" !text-white" href={link}>
                التفاصيل
              </Link>
            </Button>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
