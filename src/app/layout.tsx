import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { MobileNav } from "@/components/layout/MobileNav";

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
      <body className="antialiased bg-black text-white selection:bg-cyan-500/30">
        <div className="flex min-h-screen">
          <Sidebar />
          <MobileNav />
          <main className="flex-1 px-6 lg:px-24 py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
          <TableOfContents />
        </div>
      </body>
    </html>
  );
}
