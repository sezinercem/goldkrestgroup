import type { Metadata } from "next";
import { DM_Serif_Display, Open_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

// Matches the wordmark in the Goldkrest Group logo.
const logo = Open_Sans({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    default: "Goldkrest Group | Brickwork, Stone Restoration & Landscaping in Essex",
    template: "%s | Goldkrest Group",
  },
  description:
    "15 years of experience in heritage brickwork, stone restoration and lime pointing, plus landscaping and garden maintenance across Essex.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${body.variable} ${heading.variable} ${logo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
