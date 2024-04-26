// import { Inter } from "next/font/google";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxima Test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
        className="bg-gradient-to-r from-gray-100 to-blue-300"
      >
        {children}
      </body>
    </html>
  );
}
