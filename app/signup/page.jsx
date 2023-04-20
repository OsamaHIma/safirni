"use client";
import "./style.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import {
  addUserWithEmailAndPassword,
  createUserDocument,
} from "@/utils//firebase";
import { useState } from "react";

const SignUp = () => {
  const defaultProps = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultProps);
  const { displayName, email, password, confirmPassword } = formFields;
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const formHandler = (event) => {
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
    const submitHandler = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert(`Password doesn't match`);
        return;
      }
      try {
        const { user } = await addUserWithEmailAndPassword(email, password);
        dispatch(setCurrentUser(user));
        const res = await createUserDocument(user, { displayName });
        restFormFields();
      } catch (err) {
        alert(err.code);
      }
    };
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
            type="text"
            className="form-control input-lg"
            name="username"
            placeholder="الإسم الرباعي"
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control input-lg"
            name="email"
            placeholder="ألبريد الإكتروني"
            onChange={onChange}
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
            onChange={onChange}
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input-lg"
            name="confirm_password"
            placeholder="تأكيد كلمة المرور"
            onChange={onChange}
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input type="date" className="form-control" required />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <Button type="submit">إنشاء حساب</Button>
        </div>
      </form>
      <div className="text-center dark:!text-slate-100">
        لديك حساب بالفعل؟{" "}
        <Link href="signin" className="dark:text-slate-300">
          سجل الدخول
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
