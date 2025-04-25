import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ajisaka Kamandanu",
  description: "A Journey Fueled by Curiosity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <header>
          <Navigation />
        </header>
        <main id="home">{children}</main>
      </body>
    </html>
  );
}
