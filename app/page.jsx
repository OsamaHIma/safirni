"use client";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

// import './style.scss'
const Home = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="absolute  h-[calc(100vh-60px)] w-screen bg-[url('/assets/turkey1.jpg')] bg-cover bg-no-repeat">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <h1 className="text-5xl md:text-8xl text-slate-100 px-5 mt-3 md:leading-[8rem] leading-[5rem]">
              التاريخ والحضارة
              <br className="xl:block hidden" />
              ,تركيا
            </h1>
            <motion.div variants={textVariant()}>
              <p className="text-gray-200 px-5 leading-7">
                الشركة السياحية الأفضل في الوطن العربي، هدفنا مساعدتك وتيسير
                أمورك، لا تتردد بالتواصل معنا فنحن هنا لنساعدك على إيجاد كل ما
                تحتاج له. إن كنت تبحث عن سكن أو جولة سياحية لتقضي أفضل الأوقات
                فقد وجدت طلبك.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};
export default Home;
