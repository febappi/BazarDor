import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/Navbar";
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
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
