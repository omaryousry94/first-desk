import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACV Fixer - Fix Your ACV Calculations In Minutes",
  description: "Streamline your Actual Cash Value calculations with our intelligent SaaS platform. Reduce errors, save time, and increase accuracy for insurance claims and property valuations.",
  keywords: ["ACV", "Actual Cash Value", "insurance", "calculations", "property valuation", "claims processing"],
  authors: [{ name: "ACV Fixer Team" }],
  openGraph: {
    title: "ACV Fixer - Fix Your ACV Calculations In Minutes",
    description: "Streamline your Actual Cash Value calculations with our intelligent SaaS platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
