import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import MainMenu from "@/components/MainMenu";
import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mariposa budget",
  description: "Create budget and track expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <MainMenu />
          <main className="">
            <Providers>{children}</Providers>
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
