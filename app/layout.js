import { Inter } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Dashboard",
  description: "Tariq Yunusa's Entry For The Geepay Frontend Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}
