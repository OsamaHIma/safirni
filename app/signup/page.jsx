"use client";
import "./style.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import {
  addUserWithEmailAndPassword,
  createUserDocument,
  signIN,
} from "@/utils//firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { setCurrentUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      await signIN();
      toast.success("تم تسجيل الدخول");
    } catch (error) {
      toast.error(error.message || error);
    }
  };
  const defaultProps = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  };

  const [formFields, setFormFields] = useState(defaultProps);
  const { displayName, email, password, confirmPassword, dateOfBirth } =
    formFields;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const restFormFields = () => {
    setFormFields(defaultProps);
  };
  //Handel submit
  const formHandler = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
    const submitHandler = async () => {
      if (password !== confirmPassword) {
        toast.error(`كلمة المرور غير متطابقة`);
        return;
      }
      if (
        !password ||
        !displayName ||
        !email ||
        !confirmPassword ||
        !dateOfBirth
      )
        return;
      try {
        const { user } = await addUserWithEmailAndPassword(email, password);
        dispatch(setCurrentUser(user));
        const res = await createUserDocument(user, { displayName });
        restFormFields();
        toast.success("تم إنشاء الحساب بنجاح");
      } catch (err) {
        toast.error(err.code || err.message || err);
      }
    };
    submitHandler();
  };
  return (
    <section className="signup-form !pt-0 sm:!pt-4 transition-all ease-in relative">
      <form
        className="needs-validation bg-slate-50 dark:!bg-slate-700"
        onSubmit={formHandler}
        noValidate
      >
        <h2 className="dark:!text-slate-300">إنشاء حساب</h2>
        <p className="hint-text dark:!text-slate-100">
        انشئ حساب عن طريق جوجل او البريد الإكتروني
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
            className="form-control shadow input-lg"
            name="displayName"
            value={displayName}
            placeholder="الإسم الرباعي"
            minLength={10}
            onChange={onChange}
            required="required"
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control shadow input-lg"
            name="email"
            value={email}
            placeholder="ألبريد الإكتروني"
            autoComplete="email"
            onChange={onChange}
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
            placeholder="كلمة المرور"
            onChange={onChange}
            autoComplete="new-password"
            minLength={6}
            required="required"
          />
          <div className="invalid-feedback">
            هذا الحقل مطلوب! كلمة المرور 6 احرف علي الاقل
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control shadow input-lg"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="تأكيد كلمة المرور"
            autoComplete="new-password"
            minLength={6}
            onChange={onChange}
            required="required"
          />
          <div className="invalid-feedback">
            هذا الحقل مطلوب! كلمة المرور 6 احرف علي الاقل
          </div>
        </div>
        <div className="form-group datepicker">
          <input
            type="date"
            className="form-control shadow"
            required
            placeholder="تاريخ الميلاد"
            name="dateOfBirth"
            autoComplete="bday"
            onChange={onChange}
            value={dateOfBirth}
          />
          <div className="invalid-feedback">هذا الحقل مطلوب!</div>
        </div>
        <div className="form-group">
          <Button type="submit">إنشاء حساب</Button>
        </div>
      </form>
      <div className="text-center dark:!text-slate-100">
        لديك حساب بالفعل؟{" "}
        <Link href="signin" className="dark:!text-gray-400">
          سجل الدخول
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
