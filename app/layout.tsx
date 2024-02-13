import type {Metadata} from "next"
import {Inter} from "next/font/google"
import React from "react"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citython",
  description: "City University's annual hackathon"
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
			</body>
    </html>
  );
}
