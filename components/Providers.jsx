"use client";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/store/";
import { useEffect } from "react";

const Providers = ({ children }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Provider store={store}>
        <ToastContainer
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {children}
      </Provider>
    </ThemeProvider>
  );
};
export default Providers;
