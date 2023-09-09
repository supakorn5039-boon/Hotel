import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import Search from "./components/navbar/Search";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <Search />
        {children}
      </body>
    </html>
  );
}
