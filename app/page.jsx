const Home = () => {
  return (
    <div className="h-[calc(100%-60px)] w-full bg-[url('/assets/turkey2.jpg')] dark:bg-[url('/assets/turkey3.jpg')] bg-cover bg-no-repeat">
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-5xl md:text-8xl text-slate-100 !pr-[3rem] mt-3 md:leading-[8rem] leading-[5rem]">
            التاريخ والحضارة
            <br className="xl:block hidden" />
            ,تركيا
          </h1>

          <p className="text-gray-200 !pr-[3rem] leading-7 mb-10 truncate ">
            الشركة السياحية الأفضل في الوطن العربي، <br />
            هدفنا مساعدتك وتيسير أمورك، لا تتردد بالتواصل معنا فنحن هنا لنساعدك
            على إيجاد كل ما تحتاج له. <br /> إن كنت تبحث عن سكن أو جولة سياحية
            لتقضي أفضل الأوقات فقد وجدت طلبك.
          </p>
          <hr className="text-slate-100 block" />

          <div className="row mt-5 !pr-[3rem]">
            <div className="col-md-4">
              <div className="info-box">
                <p className="text-gray-300 truncate">الاماكن الاكثر شهرة</p>
                <p className="text-white font-extrabold truncate">
                  متحف آيا صوفيا في مدينة إسطنبول
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <p className="text-gray-300 truncate">الاماكن الاكثر إثارة</p>
                <p className="text-white font-extrabold truncate">
                  برج غالاتا هو برج تاريخي عريق يُقال أنه بُنِي عام 507
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <p className="text-gray-300 truncate">طبيعة المدينة</p>
                <p className="text-white font-extrabold !mb-0 truncate">
                  واحدة من أكبر و أجمل مدن تركيا
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 !p-0"></div>
      </div>
    </div>
  );
};
export default Home;
