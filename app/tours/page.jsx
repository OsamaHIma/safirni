import Button from "@/components/Button";
import Link from "next/link";

const Tours = () => {
  return (
    <div className="container pt-4">
      <div className="row g-5 mb-3">
        <div className="col-md-6">
          <div className="card text-center bg-slate-50 dark:!bg-slate-700">
            <div
              className="head"
              style={{
                clipPath:
                  "polygon(0px 0px, 100% 0px, 101.75% 82.27%, -10px 98.66%)",
              }}
            >
              <img
                src="/assets/Egypt1.jpg"
                className="card-img-top"
                alt="Egypt tour"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title dark:!text-white">
                {" "}
                رحلة إلى الأهرامات في مصر.
              </h5>
              <p className="card-text dark:!text-slate-200">
                تتصف أهرامات مصر الثلاثة بأنها أحد أهم عجائب الدنيا السبعة في
                جمهورية مصر تقع على هضبة الجيزة في محافظة الجيزة.
              </p>
              <p className="text-success">
                السعر: $175.99
              </p>
              <Button extraClass="!bg-[#16aeca]"><Link className=" !text-white" href="/tours/egypt">التفاصيل</Link></Button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center h-[21rem] bg-slate-50 dark:!bg-slate-700">
            <div
              className=""
              style={{
                clipPath:
                  "polygon(0px 0px, 100% 0px, 101.75% 82.27%, -10px 98.66%)",
              }}
            >
              <img
                src="/assets/turkey1.jpg"
                className="card-img-top"
                alt="Turkey tour"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title dark:!text-white">
                رحلة إلى مدينة إسطنبول في تركيا.
              </h5>
              <p className="card-text dark:!text-slate-200">
                إسطنبول هي واحدة من أكبر و أجمل مدن تركيا وهي مصنفة ضمن أكثر
                المدن السياحية جذباً للسياح في العالم وتُعتبر إسطنبول الخيار
                الأول للسياح
              </p>
              <p className="text-success">
                السعر: $153
              </p>
              <Button extraClass="!bg-[#16aeca]"><Link className=" !text-white" href="/tours/turkey">التفاصيل</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
