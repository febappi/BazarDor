import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "BazarDor",
  description: "BazarDor for daily price update",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
