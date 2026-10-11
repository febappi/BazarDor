import { Hind_Siliguri } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from 'react-hot-toast';
const hindSiliguriLight = Hind_Siliguri({
  weight: '300',
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri', // Optional: for Tailwind CSS CSS variables
});
export const metadata = {
  title: "BazarDor",
  description: "BazarDor for daily price update",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="bn"
      className={`${hindSiliguriLight.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
