import Contact from "@/components/contact/page";
import Services from "@/components/services/page";
import Tours from "@/components/tours/page";

const Home = () => {
  return (
    <>
      <main>
        <section className="h-[calc(100vh-30px)] w-full bg-[url('/assets/turkey2.jpg')] dark:bg-[url('/assets/turkey3.jpg')] bg-cover bg-no-repeat">
          <div className="row">
            <div className="col-md-8">
              <h1 className="text-5xl md:text-8xl text-slate-100 !pr-[3rem] mt-3 md:leading-[8rem] leading-[5rem]">
                التاريخ والحضارة
                <br className="xl:block hidden" />
                ,تركيا
              </h1>

              <p className="text-gray-200 !pr-[3rem] leading-7 mb-20 mt-10 sm:mt-10 leading">
                الشركة السياحية الأفضل في الوطن العربي، <br />
                هدفنا مساعدتك وتيسير أمورك، لا تتردد بالتواصل معنا فنحن هنا
                لنساعدك على إيجاد كل ما تحتاج له. <br /> إن كنت تبحث عن سكن أو
                جولة سياحية لتقضي أفضل الأوقات فقد وجدت طلبك.
              </p>
              <hr className="text-slate-100 block" />
            </div>
            <div className="col-md-4 !p-0"></div>
          </div>
        </section>
        <Services />
        <Tours/>
      </main>
      <Contact />
    </>
  );
};
export default Home;
