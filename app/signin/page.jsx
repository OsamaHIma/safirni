"use client";
import "./style.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { signIN } from "@/utils/firebase";
import { toast } from "react-toastify";
import { useState } from "react";

const defaultProps = {
  email: "",
  password: "",
};

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await signIN();
      toast.success("تم تسجيل الدخول");
    } catch (error) {
      toast.error(error.message || error);
    }
  };

  const [formFields, setFormFields] = useState(defaultProps);
  const { email, password } = formFields;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
    if (!password || !email) return;
    const submitHandler = async () => {
      event.preventDefault();
      try {
        await signInUserWithEmailAndPassword(email, password);
        toast.success("تم تسجيل الدخول");
        restFormFields();
      } catch (err) {
        toast.error(err.code || err.message || err);
      }
    };
    submitHandler();
  };
  const restFormFields = () => {
    setFormFields(defaultProps);
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
            className="form-control shadow input-lg"
            name="email"
            value={email}
            onChange={onChange}
            autoComplete="email"
            placeholder="ألبريد الإكتروني"
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control shadow input-lg"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="كلمة المرور"
            autoComplete="current-password"
            minLength={6}
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group flex justify-between items-center">
          <Button type="submit"> تسجيل الدخول</Button>
          <Link
            href="/signin"
            className="dark:!text-gray-400"
            onClick={() =>
              toast.error(
                "اعملك ايه يعني هو انا الي نسيتة ركز بس وهتفتكره إن شاء الله"
              )
            }
          >
            هل نسيت كلمة المرور؟
          </Link>
        </div>
      </form>
      <div className="text-center dark:!text-slate-100">
        ليس لديك حساب ؟{" "}
        <Link href="/signup" className=" dark:!text-gray-400">
          أنشئ حساب
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
