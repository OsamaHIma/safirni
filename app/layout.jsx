import "./globals.scss";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Cairo } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const cairo = Cairo({ subsets: ["latin"] });
export const metadata = {
  title: "سفرني | الرئيسية",
  description: `الشركة السياحية الأفضل في الوطن العربي، هدفنا مساعدتك وتيسير
  أمورك، لا تتردد بالتواصل معنا فنحن هنا لنساعدك على إيجاد كل
  ما تحتاج له. إن كنت تبحث عن سكن أو جولة سياحية لتقضي أفضل
  الأوقات فقد وجدت طلبك.`,
};
const RootLayout = ({ children }) => {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="shortcut icon" href="/assets/logo.svg" />
      </head>
      <body
        className={`${cairo.className} bg-slate-200 dark:bg-slate-800 transition-all ease-in`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
