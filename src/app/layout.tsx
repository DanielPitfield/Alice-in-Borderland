import "./globals.scss";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Alice in Borderland",
  description:
    "A website for everything Alice in Borderland (the TV show) including profile pages for all the main characters and all the card games!",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          <main>{children}</main>
        </>
      </body>
    </html>
  );
}
