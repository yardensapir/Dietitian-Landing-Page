import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ClientSideLayoutCheck from "./components/ClientSideLayoutCheck/ClientSideLayoutCheck";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "יפית קרופניק - דיאטנית קלינית",
  description:
    "תזונה מותאמת אישית, ליווי מקצועי לירידה במשקל, תזונת ספורט, טיפול באכילה רגשית ותזונה צמחונית.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <ClientSideLayoutCheck>
          {children}
        </ClientSideLayoutCheck>
      </body>
    </html>
  );
}