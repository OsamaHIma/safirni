"use client";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/store/";

const Providers = ({ children }) => {
  
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
