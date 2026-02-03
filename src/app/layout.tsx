import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Preet Patel | Full Stack Developer",
  description: "Performance-driven Full Stack Developer specializing in React.js, Node.js, and scalable web applications. Building high-performance solutions with modern technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "TypeScript", "Web Development", "Preet Patel"],
  authors: [{ name: "Preet Patel" }],
  openGraph: {
    title: "Preet Patel | Full Stack Developer",
    description: "Performance-driven Full Stack Developer specializing in scalable web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
