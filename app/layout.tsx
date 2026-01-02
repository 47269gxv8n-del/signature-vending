import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Signature Vending",
  description: "Premium Convenience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          text-[#f5e6c8]
          bg-[radial-gradient(ellipse_at_top,_#3a1f14_0%,_#2a140c_45%,_#1a0d08_100%)]
        "
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

