"use client";
import "./style.scss";
import {
  FacebookIcon,
  MapPinIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  PhoneCallIcon,
} from "lucide-react";

const Contact = () => {
  const formHandler = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="map mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1657551692935!6m8!1m7!1sgT28ssf0BB2LxZ63JNcL1w!2m2!1d35.70407437075822!2d139.5577317304603!3f297.2477871110872!4f-21.116245064170727!5f0.7820865974627469"
                  className="border-none"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-addresses">
                <h4 className="dark:!text-white font-semibold mt-0 sm:mt-3 mb-7 sm:mb-10">
                  {" "}
                  مقر الشركة
                </h4>
                <ul className="p-0">
                  <li>
                    <MapPinIcon className="!my-2" />
                    <address className="d-inline">
                      مدينة نصر الحي السادس
                    </address>
                  </li>
                  <li>
                    <PhoneCallIcon className="!my-2" />
                    <a href="tel:+201090885749">201090885749</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-text text-center">
            <h3 className="dark:!text-gray-300">تواصل معنا</h3>
          </div>
          <form
            className="contact-form row needs-validation"
            noValidate
            onSubmit={formHandler}
          >
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="الأسم"
                autoComplete="given-name"
                required
              />
              <div className="invalid-feedback">برجاء ادخال الاسم</div>
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="البريد الإلكتروني"
                autoComplete="on"
                required
              />
              <div className="invalid-feedback">
                برجاء ادخال البريد الإلكتروني
              </div>
            </div>
            <div className="col-12 mb-3">
              <textarea
                name=""
                id=""
                className="form-control"
                placeholder="الرسالة"
                required
              ></textarea>
              <div className="invalid-feedback">برجاء ادخال الرسالة</div>
            </div>
            <button type="submit" className="btn-sup">
              إرسال
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-us">
                  <h5>عن الشركة</h5>
                  <p>
                    الشركة السياحية الأفضل في الوطن العربي، هدفنا مساعدتك وتيسير
                    أمورك، لا تتردد بالتواصل معنا فنحن هنا لنساعدك على إيجاد كل
                    ما تحتاج له. إن كنت تبحث عن سكن أو جولة سياحية لتقضي أفضل
                    الأوقات فقد وجدت طلبك.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <TwitterIcon />
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="">
                        <LinkedinIcon />
                      </a>
                    </li>
                    <li className="list-inline-item mr-2">
                      <a href="">
                        <InstagramIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-us">
                  <h5>الإتصال بالشركة</h5>
                  <ul className="contact-list">
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      Tanta
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      01090885749
                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      osamahima018@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="d-inline">جميع الحقوق محفوظة </p>
          <span>2023</span>&copy;
        </div>
      </footer>
    </>
  );
};

export default Contact;
