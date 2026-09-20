import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Nav } from "@/components/nav/Nav";

const nunito = Nunito({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Codarse - Projeto Curso",
  description: "Codarse - Plataforma de Cursos Gratuitos para amantes de tecnologia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        </body>
    </html>
  );
}
