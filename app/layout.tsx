import type { Metadata } from "next";
import { Geist_Mono, Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantumLeap — Quantum AI as a Service",
  description:
    "Supercharge decisions with Quantum AI. Forecast faster, optimize deeper, and scale smarter for medicine, finance, and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={`${manrope.variable} ${display.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
