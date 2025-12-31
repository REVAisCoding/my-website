import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "REVA",
  description: "Singer, songwriter and illustrator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Reva
            </h1>
            <Navbar />
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}