import React from "react";

const Button = ({ children, type, onClick, extraClass}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${extraClass} bg-slate-900 text-white dark:!text-slate-900 hover:bg-slate-800 dark:bg-slate-200 dark:hover:bg-slate-100 h-10 py-1.7 px-3.5 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
