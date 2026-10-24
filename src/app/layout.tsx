import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nexora — Segurança Eletrónica, CCTV e Soluções Digitais em Angola",
  description:
    "Soluções tecnológicas de segurança eletrónica, videovigilância CCTV, controlo de acesso, IoT, automação e consultoria em TI. Protegemos empresas e particulares em Angola.",
  keywords: [
    "segurança eletrónica Angola",
    "CCTV Luanda",
    "videovigilância",
    "controlo de acesso",
    "IoT Angola",
    "Nexora",
  ],
  openGraph: {
    title: "Nexora — Tecnologia que Protege",
    description: "Segurança eletrónica, CCTV, IoT e soluções digitais em Angola.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}