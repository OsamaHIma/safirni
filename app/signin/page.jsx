"use client";
import "./style.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { signIN } from "@/utils/firebase";

const SignIn = () => {
  const signInWithGoogle = async () => {
    await signIN();
  };

  const formHandler = (event) => {
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
  };
  return (
    <section className="signup-form transition-all ease-in relative">
      <form
        className="needs-validation bg-slate-50 dark:!bg-slate-700"
        onSubmit={formHandler}
        noValidate
      >
        <h2 className="dark:!text-slate-300">إنشاء حساب</h2>
        <p className="hint-text dark:!text-slate-100">
          سجل الدخول عن طريق جوجل او البريد الإكتروني
        </p>
        <div className="text-center">
          <Button
            className="social-btn"
            type="button"
            onClick={signInWithGoogle}
          >
            <LogInIcon className="h-4 w-4 inline" /> Google
          </Button>
        </div>
        <div className="or-seperator">
          <b>أو</b>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control input-lg"
            name="email"
            placeholder="ألبريد الإكتروني"
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input-lg"
            name="password"
            placeholder="كلمة المرور"
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group flex justify-between">
          <Button type="submit"> تسجيل الدخول</Button>
          <Link href="#">هل نسيت كلمة المرور؟</Link>
        </div>
      </form>
      <div className="text-center dark:!text-slate-100">
        ليس لديك حساب ؟{" "}
        <Link href="/signup" className=" dark:text-slate-300">
          أنشئ حساب
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
