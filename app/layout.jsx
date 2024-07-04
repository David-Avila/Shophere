import { Rubik } from "next/font/google";
import "./globals.css";

//Components
import NavBar from "./components/NavBar";

const font = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Shophere",
  description: "Demostration project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}</body>
    </html>
  );
}
